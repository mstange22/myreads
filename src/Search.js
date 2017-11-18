import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class Search extends Component {

  state = {
      query: "",
      searchResults: [],
      booksOnShelves: []
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ booksOnShelves: books })
    })
  }

  updateSearchBookShelves() {

    let books = this.state.searchResults

    this.setState({
      searchResults: books.map(book => {
        this.state.booksOnShelves.forEach(bookOnShelf => {
          bookOnShelf.id === book.id && (book.shelf = bookOnShelf.shelf)
        })
        return book;
      })
    })
  }

  updateQuery = (event) => {
      const query = event.target.value.trim()
      this.setState({ query })

      query ? (
          BooksAPI.search(query, 20).then(books => {
              !books.error ? (
                this.setState({ searchResults: books })
              ) : this.setState({ searchResults: [] })
              this.updateSearchBookShelves()
          })
      ) : (this.setState({ searchResults: [] }))
  }

  handleShelfChange = (book, shelf) => {
		BooksAPI.update(book, shelf).then(
      BooksAPI.getAll().then(books => {
      this.setState({ booksOnShelves: books })
      this.updateSearchBookShelves()
    }))
	}

  render() {
      return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              onChange={this.updateQuery}
              type="text"
              value={this.state.query}
              placeholder="Search by title or author"/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.searchResults.length > 0 && this.state.searchResults.map(book => (
              <li key={book.id}>
                <Book book={book}  handleShelfChange={this.handleShelfChange}/>
              </li>
            ))}
          </ol>
        </div>
      </div>
      )
  }
}

export default Search