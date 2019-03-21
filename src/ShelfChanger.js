import React, { Component } from 'react';

class ShelfChanger extends Component {

  updBookShelf = event =>
    this.props.switchShelf(this.props.book, event.target.value);

  render() {
    
    var book = this.props.book;
    var books = this.props.books;
    
    let currentShelf = 'none';

    for (let item of books) {
      if (item.id === book.id) {
        currentShelf = item.shelf;
        break;
      }
    }

    return (
      <div className="book-shelf-changer">
        <select onChange={this.updBookShelf} defaultValue={currentShelf}>
          <option value="moveto" disabled> 
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default ShelfChanger;
