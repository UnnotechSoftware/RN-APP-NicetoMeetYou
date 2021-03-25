import { actionTypes } from "./actionTypes";

const initialState = {
  bookList: {
    list: [
      {
        id: 0,
        name: "",
        image: null,
        count: "unknown",
        author: "unknown",
        created: "unknown",
        descript: "",
      },
    ],
    isLoading: true,
  },
};

const getNewBook = (state, info) => {
  return {
    ...initialState.bookList.list[0],
    ...info,
    id: state.bookList.list.length + 1,
  };
};

const editedList = (state, info) => {
  const { list } = state.bookList;
  const targetIndex = list.findIndex((book) => book.id === info.id);
  const targetBook = list[targetIndex];
  const editedBook = {
    ...targetBook,
    ...info,
  };
  const newList = [
    ...list.slice(0, targetIndex),
    editedBook,
    ...list.slice(targetIndex + 1),
  ];
  return newList;
};

export const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_LIST: {
      const { data } = action;
      return {
        bookList: {
          list: data,
          isLoading: false,
        },
      };
    }
    case actionTypes.ADD_BOOK: {
      const { info } = action;
      const newBook = getNewBook(state, info);
      return {
        ...state,
        bookList: {
          ...state.bookList,
          list: [...state.bookList.list, newBook],
        },
      };
    }
    case actionTypes.EDIT_BOOK: {
      const { info } = action;
      const newList = editedList(state, info);
      return {
        ...state,
        bookList: {
          ...state.bookList,
          list: newList,
        },
      };
    }
    default:
      return state;
  }
};
