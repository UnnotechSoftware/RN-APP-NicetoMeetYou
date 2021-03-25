import { actionTypes } from "./actionTypes";

export const booksActions = {
  updateList: (data) => {
    return {
      type: actionTypes.UPDATE_LIST,
      data,
    };
  },
  addBook: (info) => {
    return {
      type: actionTypes.ADD_BOOK,
      info,
    };
  },
  editBook: (info) => {
    return {
      type: actionTypes.EDIT_BOOK,
      info,
    };
  },
};
