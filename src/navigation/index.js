import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Component from "../containers/BooksContainer";
import BookDetail from "../component/BookDetail/BookDetail";

import { styles } from "./styles";

export default function Navigation() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BookList">
        <Stack.Screen
          name="BookList"
          component={Component.BookList}
          options={{
            title: " ",
            headerStyle: styles.header,
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          name="BookDetail"
          component={BookDetail}
          options={({ route }) => ({
            title: route.params.book.name,
            headerStyle: styles.header,
            headerTitleStyle: styles.headerTitleStyle,
            headerTintColor: "white",
          })}
        />
        <Stack.Screen
          name="BookEdit"
          component={Component.BookEdit}
          options={({ route }) => ({
            title: route.params.title,
            headerStyle: styles.header,
            headerTitleStyle: styles.headerTitleStyle,
            headerTintColor: "white",
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
