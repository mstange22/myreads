import React, { Component } from 'react'
import ShelfChanger from './ShelfChanger'

class Book extends Component {
	render() {
		let book = this.props.book
		return (
			<div className="book">
				<div className="book-top">
					{book.imageLinks ? (
						<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
					) : (
							<div className="book-cover" style={{ width: 128, height: 193 }}></div>
						)}
					<ShelfChanger book={book}  handleShelfChange={this.props.handleShelfChange}/>
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
		)
	}
}

export default Book