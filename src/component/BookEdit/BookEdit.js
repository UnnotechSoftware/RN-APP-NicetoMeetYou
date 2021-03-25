import React, { useState, useLayoutEffect } from "react";
import { TextInput, View } from "react-native";
import { booksAPIs } from "../../api/booksAPI";
import { addHeaderRightButton } from "../../utilities";
import { styles } from "./styles";

export default function BookEdit({ navigation, route, addBook, editBook }) {
  const { book, detail, from } = route.params;

  const [bookInfo, setBookInfo] = useState({
    ...book,
  });

  const onAuthorInputChange = (author) => {
    setBookInfo((prev) => ({
      ...prev,
      author,
    }));
  };

  const onCreateDateChange = (created) => {
    setBookInfo((prev) => ({
      ...prev,
      created,
    }));
  };

  const onDescriptChange = (descript) => {
    setBookInfo((prev) => ({
      ...prev,
      descript,
    }));
  };

  const addNewBook = async (info) => {
    await booksAPIs.addBook(info);
    addBook(info);
    navigation.navigate("BookList");
  };

  const editOldBook = async (info) => {
    const _newDetail = {
      id: info.id,
      price: 999,
      count: 999,
    };
    await booksAPIs.editBookById(info.id, _newDetail);
    editBook(info);
    navigation.navigate("BookList");
  };

  //use dispatch to add/edit bookList
  const handleSavePress = () => {
    switch (from) {
      case "bookList":
        addNewBook(bookInfo);
        break;
      case "bookDetail":
        editOldBook(bookInfo);
        break;
      default:
        break;
    }
  };

  useLayoutEffect(() => {
    addHeaderRightButton(navigation, "Save", handleSavePress);
  }, [navigation, bookInfo]);

  return (
    <View>
      <View style={styles.author}>
        <TextInput
          onChangeText={(text) => onAuthorInputChange(text)}
          value={bookInfo.author}
          style={styles.authorInput}
          placeholder="Author"
        />
      </View>
      <View style={styles.createDate}>
        <TextInput
          onChangeText={(text) => onCreateDateChange(text)}
          value={bookInfo.created}
          style={styles.createDateInput}
          placeholder="Created at"
        />
      </View>
      <View style={styles.bookDescript}>
        <TextInput
          onChangeText={(text) => onDescriptChange(text)}
          style={styles.bookDescriptInput}
          value={bookInfo.descript}
          multiline
          numberOfLines={10}
        />
      </View>
    </View>
  );
}
