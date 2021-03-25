import { StyleSheet } from "react-native";

const italicFont = "italic";

export const styles = StyleSheet.create({
  container: {
    margin: "12px",
    paddingTop: "12px",
    paddingBottom: "12px",
    paddingLeft: "10px",
    paddingRight: "10px",
    backgroundColor: "#ffffff",
    width: "calc(50% - 24px)",
  },
  book: {
    alignItems: "center",
  },
  bookImg: {
    width: "50px",
    height: "50px",
    marginBottom: "8px",
  },
  defaultImgContainer: {
    margin: "25px",
  },
  defaultImg: {
    width: "16px",
    height: "16px",
  },
  author: {
    fontStyle: italicFont,
  },
  createDate: {
    fontStyle: italicFont,
  },
});
