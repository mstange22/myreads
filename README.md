# MyReads Project

This is the first homework assignment in the Udacity React Nanodegree program. A static template was provided along with the CSS and HTML markup.  I created new React Components for the `Search` and `Bookshelves` views, along with components for each of the shelves (`CurrentlyReading`, `WantToRead` & `Read`), `Book` and the `ShelfChanger` pop-up selector.

## To run the application:

* clone this repository
* install all project dependencies with `npm install`
* start the development server with `npm start`.  The project should deploy on http://localhost:3000.

## The App
The program starts with the MyReads home view, which is a three-shelf virtual bookshelf: Currently Reading, Want to Read, and Read.  The user can move any book to a different shelf, but clicking on the green-circled down arrow and selecting the shelf (or "none" to remove it from the home bookshelf).

The + icon in the lower-right corner switches to the search view, where the user can enter characters in the search bar to bring up collections of books (see Note below re: Search Terms).  Once books have been loaded into the search view (max of 20), the user can move them to the home bookshelf by selecting a shelf.  

## Backend Server

To simplify the development process, a backend server was provided as well as an API file `BooksAPI.js`, which contains the methods needed to perform operations on the backend.

## Note

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).