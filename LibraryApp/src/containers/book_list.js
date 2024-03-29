import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

// Whatever is returned will show up as props
// inside of BookList
const mapStateToProps = (state) => {
  return {
    books: state.books
  };
};

// Anything returned from this function will end p as props
// on the Booklist containers

// Whenever SelectBook is called, the result should be passed
// to all of the reducers
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ selectBook: selectBook }, dispatch);
};

// Promotes BookList from a component to a container - it needs to
// know about this new dispatch method, selectBook.
// Make it available as a prop.
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookList);
