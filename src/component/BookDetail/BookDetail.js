import React, { useState, useLayoutEffect, useEffect } from "react";
import { Text, View, Button } from "react-native";
import { booksAPIs } from "../../api/booksAPI";
import { addHeaderRightButton } from "../../utilities";
import { styles } from "./styles";

export default function BookDetail({ navigation, route }) {
  const { book } = route.params;
  const [bookDetail, setBookDetail] = useState({ isLoading: true, detail: {} });

  const handleHeaderButtonPress = () => {
    const { detail } = bookDetail;
    navigation.navigate("BookEdit", {
      from: "bookDetail",
      title: "Edit book",
      book,
      detail,
    });
  };

  const fetchBookDetail = async (id) => {
    const { data } = await booksAPIs.getBookDetail(id);
    setBookDetail({
      isLoading: false,
      detail: data,
    });
  };

  useEffect(() => {
    fetchBookDetail(book.id);
  }, []);

  useLayoutEffect(() => {
    addHeaderRightButton(navigation, "Edit", handleHeaderButtonPress);
  }, [navigation, bookDetail]);

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.author}>
          Author: {book.author ? book.author : "unknown"}
        </Text>
        <Text style={styles.createDate}>
          {book.created ? book.created : "unknown"}
        </Text>
      </View>
      <View style={styles.descript}>
        <Text>{book.descript ? book.descript : "unknown"}</Text>
      </View>
    </View>
  );
}
