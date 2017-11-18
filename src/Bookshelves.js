import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import CurrentlyReading from './CurrentlyReading'
import WantToRead from './WantToRead'
import Read from './Read'

class Bookshelves extends Component {
  
  state = {
    currentlyReading: [],
    wantToRead: [],
    read: []
  }

  // get all books on page load
  componentDidMount() {
    this.getAll()
  }

  // load all books and split into appropriate array, re-render page
  getAll = () => {
    BooksAPI.getAll().then(books => {
      this.setState({
        currentlyReading: books.filter(book => book.shelf === "currentlyReading"),
        wantToRead: books.filter(book => book.shelf === "wantToRead"),
        read: books.filter(book => book.shelf === "read")
      })
    })
  }

  // update book with new shelf and reload books
  handleShelfChange = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => this.getAll())
	}

  render() {
    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {/* insert shelf components - pass array of books and handleShelfChange function */}
          <CurrentlyReading currentlyReading={this.state.currentlyReading} handleShelfChange={this.handleShelfChange}/>
          <WantToRead wantToRead={this.state.wantToRead} handleShelfChange={this.handleShelfChange}/>
          <Read read={this.state.read} handleShelfChange={this.handleShelfChange}/>
        </div>
        <div className="open-search">
          <Link to='/search'>Add a book</Link>
        </div>
      </div>
    )
  }
}

export default Bookshelves