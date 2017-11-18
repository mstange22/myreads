import React, { Component } from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

class CurrentlyReading extends Component {

	static propTypes = {
		shelfName: PropTypes.string.isRequired,
		booksOnShelf: PropTypes.array.isRequired,
        handleShelfChange: PropTypes.func.isRequired
	}
	render() {
		return (
			<div className="bookshelf">
				<h2 className="bookshelf-title">{this.props.shelfName}</h2>
				<div className="bookshelf-books">
					<ol className="books-grid">
						{/* display all 'currently reading' books */}
						{this.props.booksOnShelf.map(book => (
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