// selectBook is an ActionCreator; it needs to return an action,
// an object with a type property.

export const selectBook = book => {
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
};
