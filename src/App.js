import React from 'react'
import { Route, Switch, Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import RenderBooks from './RenderBooks'
import SearchBooks from './SearchBooks'
//import CssBaseLine from "@material-ui/core/CssBaseline"
import './App.css'
import { AppBar, Toolbar } from "@material-ui/core/"

class BooksApp extends React.Component {
  state = {
    books: [],
    //showSearchPage: false
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => this.setState({ books }));
  }

  switchShelf = (changedBook, shelf) => {
    BooksAPI.update(changedBook, shelf).then(response => {
      changedBook.shelf = shelf;
      this.setState(prevState => ({
        books: prevState.books
          .filter(book => book.id !== changedBook.id)
          .concat(changedBook)
      }));
    });
  };


  render() {
    const { books } = this.state;

    return (

      <div className="app">

        <Switch>
          <Route
            path="/search"
            render={({ history }) => (
              <SearchBooks books={books} switchShelf={this.switchShelf} />
            )}
          />
          <Route
            exact
            path="/"
            render={() => (
              <div className="list-books">
                <AppBar position='static' color='secondary'>
                  <Toolbar>
                    MyReads
                  </Toolbar>
                </AppBar>
                <RenderBooks books={books} switchShelf={this.switchShelf} />
                <div className="open-search">
                  <Link to="/search">Search and Add</Link>
                </div>
              </div>
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default BooksApp
