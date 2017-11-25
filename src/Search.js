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

  // load all books on shelves
  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ booksOnShelves: books })
    })  
  }

  // refresh search books with shelves.  First set all to 'none',
  // then loop through books on shelves and set the shelves of any matching books
  updateSearchBookShelves() {
    const { searchResults, booksOnShelves } = this.state
    this.setState({
      searchResults: searchResults.map(book => {
        book.shelf = 'none'
        booksOnShelves.forEach(bookOnShelf => {
          bookOnShelf.id === book.id && (book.shelf = bookOnShelf.shelf)
        })
        return book;
      })
    })
  }

  // as the input field is populated, update the query and search the server
  updateQuery = (event) => {
      const query = event.target.value.trim()
      this.setState({ query })

      // if a valid query, search the server.  Else set books to empty array.  Same if error.
      query ? (
        BooksAPI.search(query, 20).then(books => {
          !books.error ? (
            this.setState({ searchResults: books })
          ) : this.setState({ searchResults: [] })
        })
      ) : (this.setState({ searchResults: [] }))
      this.updateSearchBookShelves()
  }

  // update shelf of book and refresh books on shelf.
  // call updateSearchBookShelves to re-render search books with accurate shelving
  handleShelfChange = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      BooksAPI.getAll().then(books => {
        this.setState({ booksOnShelves: books })
        this.updateSearchBookShelves()
      })
    })
  }

  render() {
    return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to={process.env.PUBLIC_URL + '/'} className="close-search">Back</Link>
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