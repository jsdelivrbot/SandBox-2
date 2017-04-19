import { combineReducers } from 'redux';
import BookReducer from './book_reducer';
import ActiveBook from './active_book_reducer';

const rootReducer = combineReducers({
  books: BookReducer,
  activeBook: ActiveBook
});

export default rootReducer;
