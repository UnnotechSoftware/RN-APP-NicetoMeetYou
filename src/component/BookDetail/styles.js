import { StyleSheet } from "react-native";

const titleText = {
  fontWeight: "500",
  color: "#a3a3a3",
};

export const styles = StyleSheet.create({
  container: {
    padding: "8px",
  },
  title: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  author: {
    ...titleText,
  },
  createDate: {
    ...titleText,
  },
  descript: {
    marginTop: "8px",
  },
});
