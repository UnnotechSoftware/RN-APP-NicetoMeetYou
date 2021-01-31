import {ADD_BOOK, EDIT_BOOK, DELETE_BOOK} from './Types';

export const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book
})

export const editBook = (id, book) => ({
  type: EDIT_BOOK,
  id: id,
  payload: book
})

export const deleteBook = (id) => ({
  type: DELETE_BOOK,
  id: id,
})