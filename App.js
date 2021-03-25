import React from "react";
import Navigation from "./src/navigation";
import { BooksProvider } from "./src/redux";

export default function App() {
  return (
    <BooksProvider>
      <Navigation />
    </BooksProvider>
  );
}
