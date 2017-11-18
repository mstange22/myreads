import React, { Component } from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

class Read extends Component {

	static propTypes = {
		read: PropTypes.array.isRequired,
        handleShelfChange: PropTypes.func.isRequired
	}
	
	render() {
		return (
			<div className="bookshelf">
			<h2 className="bookshelf-title">Read</h2>
			<div className="bookshelf-books">
				<ol className="books-grid">
					{/* display all 'read' books */}
					{this.props.read.map(book => (
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