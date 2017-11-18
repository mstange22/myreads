import React, { Component } from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

class WantToRead extends Component {

	static propTypes = {
		wantToRead: PropTypes.array.isRequired,
        handleShelfChange: PropTypes.func.isRequired
	}
	
	render() {
		return (
			<div className="bookshelf">
				<h2 className="bookshelf-title">Want to Read</h2>
				<div className="bookshelf-books">
					<ol className="books-grid">
						{/* display all 'want to read' books */}
						{this.props.wantToRead.map(book => (
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

export default WantToRead