import React from "react";
import Main from "./main";
import { ThemeProvider } from "../context";

const App = () => (
  <ThemeProvider>
    <Main />
  </ThemeProvider>
);

export default App;
