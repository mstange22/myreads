import React, { Component } from 'react'
import ShelfChanger from './ShelfChanger'
import PropTypes from 'prop-types'

class Book extends Component {
    static propTypes = {
        handleShelfChange: PropTypes.func.isRequired
    }

	render() {
		let book = this.props.book
		return (
			<div className="book">
				<div className="book-top">
					{/* handle cases where there are no image links */}
					{book.imageLinks ? (
						<div className="book-cover" style={{ backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
					) : (
							<div className="book-cover"></div>
						)}
					<ShelfChanger book={book}  handleShelfChange={this.props.handleShelfChange}/>
				</div>
				<div className="book-title">{book.title}</div>
				{/* handle cases where there are no authors */}
				{book.authors ? (
					// in the event of multiple authors, list them out
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