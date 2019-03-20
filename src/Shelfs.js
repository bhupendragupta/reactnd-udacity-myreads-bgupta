import React, { Component } from 'react';
import Book from './Book';

class Shelfs extends Component {
  
  render() {
      return (
      <ol className="books-grid">
        {this.props.books.map(book => (
          <Book
            book={book}
            books={this.props.books}
            key={book.id}
            switchShelf={this.props.switchShelf}
          />
        ))}
      </ol>
    );
  }
}

export default Shelfs;
