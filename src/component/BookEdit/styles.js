import { StyleSheet } from "react-native";

const inputContainer = {
  backgroundColor: "#ffffff",
  borderRadius: "3px",
};

const input = {
  paddingTop: "6px",
  paddingRight: "12px",
  paddingBottom: "11px",
  paddingLeft: "12px",
};

export const styles = StyleSheet.create({
  author: {
    ...inputContainer,
    height: "40",
    marginTop: "20px",
    marginRight: "12px",
    marginBottom: "0",
    marginLeft: "12px",
  },
  authorInput: {
    ...input,
  },
  createDate: {
    ...inputContainer,
    height: "40",
    marginTop: "12px",
    marginRight: "12px",
    marginBottom: "0",
    marginLeft: "12px",
  },
  createDateInput: {
    ...input,
  },
  bookDescript: {
    ...inputContainer,
    margin: "12px",
  },
  bookDescriptInput: {
    ...input,
  },
});
