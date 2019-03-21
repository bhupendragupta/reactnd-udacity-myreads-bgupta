import React, { Component } from 'react';
import ShelfChanger from './ShelfChanger';
import noCover from './icons/no-cover-image.png';

class Book extends Component {
 
  render() {
    const { book, books, switchShelf } = this.props;
   
    const bookCvr =
      book.imageLinks && book.imageLinks.thumbnail
        ? book.imageLinks.thumbnail
        : noCover;
    const title = book.title ? book.title : 'No title available';

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{backgroundImage: `url(${bookCvr})`}}
            />
            <ShelfChanger book={book} books={books} switchShelf={switchShelf} />
          </div>
          <div className="book-title">{title}</div>
          {
          book.authors &&
            book.authors.map((author, index) => (
              <div className="book-authors" key={index}>
                {author}
              </div>
            ))}
        </div>
      </li>
    );
  }
}

export default Book;
