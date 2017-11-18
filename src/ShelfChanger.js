import React, { Component } from 'react'
import PropTypes from 'prop-types'

// class for pop-up shelf selector
class ShelfChanger extends Component {
    static propTypes = {
      handleShelfChange: PropTypes.func.isRequired
    }

	render () {
		const { book, handleShelfChange } = this.props
		return(
			<div className="book-shelf-changer">
				{/* set default value to current shelf or 'none' if book is not on a shelf) */}
				<select value={book.shelf ? book.shelf : 'none'} onChange={(e) => handleShelfChange(book, e.target.value)}>
					<option value="none" disabled>Move to...</option>
					<option value="currentlyReading">Currently Reading</option>
					<option value="wantToRead">Want to Read</option>
					<option value="read">Read</option>
					<option value="none">None</option>
				</select>
			</div>
		)
	}
}

export default ShelfChanger