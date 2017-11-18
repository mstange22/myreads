import React, { Component } from 'react'
import Book from './Book'

class Read extends Component {
	render() {
		return (
			<div className="bookshelf">
			<h2 className="bookshelf-title">Read</h2>
			<div className="bookshelf-books">
				<ol className="books-grid">
					{this.props.booksRead.map(book => (
						<li key={book.id}>
							<Book book={book} handleShelfChange={this.props.handleShelfChange}/>
						</li>
					))}
				</ol>
			</div>
		</div>
		)
	}
}

export default Read