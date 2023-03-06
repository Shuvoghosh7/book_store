import {editBook} from '../actionCreator';

const  editBookItem= (bookId, newText, setIsEditing) => {
  return async (dispatch) => {
    const response = await fetch(`http://localhost:9000/books/${bookId}`, {
      method: 'PATCH',
      body: JSON.stringify({
        text: newText,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const book = await response.json();

    dispatch(editBook(book.id, book));
    // this should be false after the data change in the server
    setIsEditing(false);
  };
};

export default editBookItem;
