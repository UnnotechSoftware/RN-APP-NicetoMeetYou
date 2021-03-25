import React, { useState, useEffect, useLayoutEffect } from "react";
import { View, FlatList, Text } from "react-native";
import { booksAPIs } from "../../api/booksAPI";
import { config } from "../../config";
import { addHeaderRightButton } from "../../utilities";
import Book from "../Book/Book";
import { styles } from "./styles";

export default function BookList({ navigation, bookList, updateList }) {
  const [visibleList, setVisibleList] = useState({
    list: [],
    totalPagesOnScreen: null,
  });
  const { itemsPerPage } = config.bookList;

  const fetchBooklist = async () => {
    const { data } = await booksAPIs.getBookList();
    updateList(data);
  };

  const handleHeaderButtonPress = () =>
    navigation.navigate("BookEdit", {
      from: "bookList",
      title: "Add new book",
    });

  const getNewList = (totalPagesOnScreen) => {
    const newList = bookList.list.slice(0, itemsPerPage * totalPagesOnScreen);
    return newList;
  };

  const initialVisibleList = () => {
    const firstPageOnScreen = 1;
    const firstPageList = getNewList(firstPageOnScreen);
    setVisibleList({
      list: firstPageList,
      totalPagesOnScreen: firstPageOnScreen,
    });
  };

  const handleLoadMore = () => {
    const updatedTotalPages = visibleList.totalPagesOnScreen + 1;
    const newList = getNewList(updatedTotalPages);
    setVisibleList((prev) => ({
      ...prev,
      list: newList,
      pagesOnScreen: updatedTotalPages,
    }));
  };

  useEffect(() => {
    fetchBooklist();
  }, []);

  useEffect(() => {
    initialVisibleList();
  }, [bookList]);

  useLayoutEffect(() => {
    addHeaderRightButton(navigation, "New", handleHeaderButtonPress);
  }, [navigation]);

  return bookList.isLoading ? (
    <Text>loading...</Text>
  ) : (
    <View>
      <FlatList
        style={styles.booksFlatList}
        horizontal={false}
        numColumns={2}
        data={visibleList.list}
        renderItem={({ item }) => <Book book={item} navigation={navigation} />}
        keyExtractor={(item) => item.id}
        onEndReached={() => handleLoadMore()}
        onEndReachedThreshold={0.01}
      />
    </View>
  );
}
