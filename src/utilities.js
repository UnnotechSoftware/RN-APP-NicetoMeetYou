import React from "react";
import { Button } from "react-native";

export const addHeaderRightButton = (navigation, title, onPress) => {
  navigation.setOptions({
    headerRight: () => (
      <Button title={title} color="#edcf64" onPress={onPress} />
    ),
  });
};
