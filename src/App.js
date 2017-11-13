import React from 'react'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    query: '',
    books: [],
    booksCurrent: [],
    booksWant: [],
    booksRead: [],
    searchResults: []
  }

componentDidMount() {
  BooksAPI.getAll().then(books => {
    this.setState({
      books,
      booksCurrent: books.filter(book => book.shelf === "currentlyReading"),
      booksWant: books.filter(book => book.shelf === "wantToRead"),
      booksRead: books.filter(book => book.shelf === "read")
     })
     console.log(books)
     console.log(this.state.booksCurrent)
     console.log(this.state.booksWant)
     console.log(this.state.booksRead)
  })
}

updateQuery = (event) => {
  const query = event.target.value.trim()
  this.setState({ query })

  query ? (
    BooksAPI.search(query, 20).then(books => {
      (!books.error) ? this.setState({ searchResults: books }) : this.setState({ searchResults: [] })
      console.log(this.state.searchResults)
    })
  ) : (this.setState({ searchResults: [] }))
}

handleSelect = (event) => {

  event.preventDefault();

}


  render() {
    return (
      <div className="app">
        <Route exact path='/search' render={() => (
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
                    <div className="book">
                      <div className="book-top">                      
                        {book.imageLinks ? (
                          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})`}}></div>
                        ) : (
                          <div className="book-cover" style={{ width: 128, height: 193}}></div>
                        )}
                        <div className="book-shelf-changer">
                          <select onChange={this.handleSelect}>
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                      </div>
                      </div>
                      <div className="book-title">{book.title}</div>
                        {book.authors ? (
                          book.authors.map(author => (
                            <div key={author} className="book-authors">{author}</div>
                          ))
                        ) : (
                          <div className="book-authors">{''}</div>
                        )}
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        )}/>
        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {this.state.booksCurrent.map(book => (
                        <li key={book.id}>
                          <div className="book">
                            <div className="book-top">
                              {book.imageLinks ? (
                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})`}}></div>
                              ) : (
                                <div className="book-cover" style={{ width: 128, height: 193}}></div>
                              )}
                              <div className="book-shelf-changer">
                                <select>
                                  <option value="none" disabled>Move to...</option>
                                  <option value="currentlyReading">Currently Reading</option>
                                  <option value="wantToRead">Want to Read</option>
                                  <option value="read">Read</option>
                                  <option value="none">None</option>
                                </select>
                              </div>
                            </div>
                            <div className="book-title">{book.title}</div>
                            {book.authors ? (
                              book.authors.map(author => (
                                <div key={author} className="book-authors">{author}</div>
                              ))
                            ) : (
                              <div className="book-authors">{''}</div>
                            )}
                          </div>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {this.state.booksWant.map(book => (
                        <li key={book.id}>
                          <div className="book">
                            <div className="book-top">
                              {book.imageLinks ? (
                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})`}}></div>
                              ) : (
                                <div className="book-cover" style={{ width: 128, height: 193}}></div>
                              )}
                              <div className="book-shelf-changer">
                                <select>
                                  <option value="none" disabled>Move to...</option>
                                  <option value="currentlyReading">Currently Reading</option>
                                  <option value="wantToRead">Want to Read</option>
                                  <option value="read">Read</option>
                                  <option value="none">None</option>
                                </select>
                              </div>
                            </div>
                            <div className="book-title">{book.title}</div>
                            {book.authors ? (
                              book.authors.map(author => (
                                <div key={author} className="book-authors">{author}</div>
                              ))
                            ) : (
                              <div className="book-authors">{''}</div>
                            )}
                          </div>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {this.state.booksRead.map(book => (
                        <li key={book.id}>
                          <div className="book">
                            <div className="book-top">
                              {book.imageLinks ? (
                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})`}}></div>
                              ) : (
                                <div className="book-cover" style={{ width: 128, height: 193}}></div>
                              )}
                              <div className="book-shelf-changer">
                                <select>
                                  <option value="none" disabled>Move to...</option>
                                  <option value="currentlyReading">Currently Reading</option>
                                  <option value="wantToRead">Want to Read</option>
                                  <option value="read">Read</option>
                                  <option value="none">None</option>
                                </select>
                              </div>
                            </div>
                            <div className="book-title">{book.title}</div>
                            {book.authors ? (
                              book.authors.map(author => (
                                <div key={author} className="book-authors">{author}</div>
                              ))
                            ) : (
                              <div className="book-authors">{''}</div>
                            )}
                          </div>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="open-search">
              <Link to='/search'>Add a book</Link>
            </div>
          </div>
        )}/>
      </div>
    )
  }
}

export default BooksApp
