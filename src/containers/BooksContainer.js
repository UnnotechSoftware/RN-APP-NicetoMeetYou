import { connect } from "react-redux";
import BookEdit from "../component/BookEdit/BookEdit";
import BookList from "../component/BookList/BookList";
import { booksActions } from "../redux/books/actions";

const mapStateToProps = (state) => {
  return {
    bookList: state.bookList,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateList: (data) => dispatch(booksActions.updateList(data)),
    addBook: (info) => dispatch(booksActions.addBook(info)),
    editBook: (info) => dispatch(booksActions.editBook(info)),
  };
};

export default {
  BookList: connect(mapStateToProps, mapDispatchToProps)(BookList),
  BookEdit: connect(null, mapDispatchToProps)(BookEdit),
};
