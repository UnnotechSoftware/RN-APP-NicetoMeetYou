import {ADD_BOOK, EDIT_BOOK, DELETE_BOOK} from './Types';

const initialState = {
  bookList: [],
}

export default function BookReducer(state = initialState, action){
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state,
        bookList: state.bookList.concat({
          ...action.payload,
          ['@id']:action.payload['@id'].replace('\/books\/','')
        })
      };
    case EDIT_BOOK:
      return {
        ...state,
        bookList: state.bookList.map((item) => {
          if (item['@id'] === action['id']){
            return {...action.payload}
          } else {
            return item
          }
        })
      };
    case DELETE_BOOK:
      return {
        ...state,
        bookList: state.bookList.filter((item) => {
          return item['@id'] !== action['id']
        })    
      };
    default:
      return state;
  }
}