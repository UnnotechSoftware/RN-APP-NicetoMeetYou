import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";

export default function Book({ book, navigation }) {
  const isImgExist = () => {
    if (book && book.image) {
      return book.image.substr(0, 4) === "http";
    }
    return false;
  };

  const onBookPress = () => {
    navigation.navigate("BookDetail", {
      book,
    });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={() => onBookPress()}>
      <View style={styles.book}>
        {isImgExist() ? (
          <Image
            style={styles.bookImg}
            source={{
              uri: book.image,
            }}
          />
        ) : (
          <View style={styles.defaultImgContainer}>
            <Image
              style={styles.defaultImg}
              source={require("../../../assets/close.png")}
            />
          </View>
        )}
        {book.name ? <Text>{book.name}</Text> : ""}
        {book.author ? <Text style={styles.author}>by {book.author}</Text> : ""}
        <Text style={styles.createDate}>{book.created}</Text>
      </View>
    </TouchableOpacity>
  );
}
