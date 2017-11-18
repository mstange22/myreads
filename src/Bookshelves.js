import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import CurrentlyReading from './CurrentlyReading'
import WantToRead from './WantToRead'
import Read from './Read'

class Bookshelves extends Component {
  
  state = {
    booksCurrent: [],
    booksWant: [],
    booksRead: []
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({
        booksCurrent: books.filter(book => book.shelf === "currentlyReading"),
        booksWant: books.filter(book => book.shelf === "wantToRead"),
        booksRead: books.filter(book => book.shelf === "read")
      })
    })
  }

  handleShelfChange = (book, shelf) => {
		BooksAPI.update(book, shelf).then(BooksAPI.getAll().then(books => {
      this.setState({
        booksCurrent: books.filter(book => book.shelf === "currentlyReading"),
        booksWant: books.filter(book => book.shelf === "wantToRead"),
        booksRead: books.filter(book => book.shelf === "read")
      })
    }))
	}

  render() {
    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <CurrentlyReading booksCurrent={this.state.booksCurrent} handleShelfChange={this.handleShelfChange}/>
          <WantToRead booksWant={this.state.booksWant} handleShelfChange={this.handleShelfChange}/>
          <Read booksRead={this.state.booksRead} handleShelfChange={this.handleShelfChange}/>
        </div>
        <div className="open-search">
          <Link to='/search'>Add a book</Link>
        </div>
      </div>
    )
  }
}

export default Bookshelves