import axios from "axios";
import { config } from "../config";

export const booksAPIs = {
  getBookList: () => axios.get(`${config.baseURL}/books`),
  getBookDetail: (id) => axios.get(`${config.baseURL}/profile/${id}`),
  addBook: (info) => axios.post(`${config.baseURL}/books`, info),
  editBookById: (id, info) =>
    axios.patch(`${config.baseURL}/profile/${id}`, info),
};
