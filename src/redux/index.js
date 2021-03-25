import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { combineReducers } from "redux";
import { booksReducer } from "./books/reducer";

export const reducers = combineReducers({ booksReducer });

const store = createStore(booksReducer);

export function BooksProvider(props) {
  return <Provider store={store}>{props.children}</Provider>;
}
