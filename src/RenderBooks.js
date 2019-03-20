import React,{Component} from 'react';
import './index.css'
import './App.css'
import Shelfs from './Shelfs';
import Typography from '@material-ui/core/Typography'
import { Divider } from '@material-ui/core';

class RenderBooks extends Component {

  //take props from the app.js
  books = this.props.books;
  switchShelf = this.props.switchShelf;
    
      state = { shelfChange: false };
    
      render() {
        const { books, switchShelf } = this.props;
        const shelfTypes = [
          { type: 'currentlyReading', title: 'Currently Reading' },
          { type: 'wantToRead', title: 'Want to Read' },
          { type: 'read', title: 'Read' }
        ];
    
        return (
          <div className="list-books-content">
            {shelfTypes.map((shelf, index) => {
              const shelfBooks = books.filter(book => book.shelf === shelf.type);
              return (
                <div className="bookshelf" key={index}>
                  <Divider/>
                  <Typography variant = 'h4' align = 'center'>{shelf.title}</Typography>
                  <Divider/>
                  <div className="bookshelf-books">
                    <Shelfs books={shelfBooks} switchShelf={switchShelf} />
                  </div>
                </div>
              );
            })}
          </div>
        );
      }
        
    }


export default RenderBooks;