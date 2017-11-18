import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Search from './Search'
import Bookshelves from './Bookshelves'
import './App.css'

class BooksApp extends Component {

  render() {
    return (
      <div className="app">
        <Route exact path={process.env.PUBLIC_URL + '/search'} render={() => (<Search/>)}/>
        <Route exact path={process.env.PUBLIC_URL + '/'} render={() => (<Bookshelves/>)}/>
      </div>
    )
  }
}

export default BooksApp
