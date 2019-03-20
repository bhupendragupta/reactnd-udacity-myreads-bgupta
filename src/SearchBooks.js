import React,{Component} from 'react';
import * as BooksAPI from './BooksAPI'
import './index.css'
import './App.css'
import Book from './Book';
import Typography from '@material-ui/core/Typography'

class SearchBooks extends Component {
          
   state = {
    ipText: '',
    searchedBook: [],
    searchedBookError: false
  };

  getBooks = event => {
    const ipText = event.target.value;
    this.setState({ ipText });


    if (ipText) {
      BooksAPI.search(ipText.trim(), 20).then(books => {
        books.length > 0
          ? this.setState({ searchedBook: books, searchedBookError: false })
          : this.setState({ searchedBook: [], searchedBookError: true });
      });

   
    } else return;
  };

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Enter search text here..."
              value={this.state.ipText}
              onChange={this.getBooks}
            />
          </div>
        </div>
        <div className="search-books-results">
          {this.state.searchedBook.length > 0 && (
            <div>
              <ol className="books-grid">
                {this.state.searchedBook.map(book => (
                  <Book
                    book={book}
                    books={this.props.books}
                    key={book.id}
                    switchShelf={this.props.switchShelf}
                  />
                ))}
              </ol>
            </div>
          )}
          {this.state.searchedBookError && (
            <Typography color = 'error'>Not found any book by this title/author</Typography>
          )}
        </div>
      </div>
    );
  }
    }


export default SearchBooks;