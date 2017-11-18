import React, { Component } from 'react'
import Book from './Book'

class CurrentlyReading extends Component {
	render() {
		return (
			<div className="bookshelf">
				<h2 className="bookshelf-title">Currently Reading</h2>
				<div className="bookshelf-books">
					<ol className="books-grid">
						{this.props.booksCurrent.map(book => (
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

export default CurrentlyReading