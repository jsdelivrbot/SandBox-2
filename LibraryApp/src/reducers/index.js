import { combineReducers } from 'redux';
import BookReducer from './book_reducer';

const rootReducer = combineReducers({
  books: BookReducer
});

export default rootReducer;
