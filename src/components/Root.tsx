import { StrictMode, useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme, type ThemeType } from "../theme";
import Header from "./Header";
import App from "../App";
import "../index.css";

const Root = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const currentTheme: ThemeType = isDarkMode ? darkTheme : lightTheme;

  return (
    <StrictMode>
      <ThemeProvider theme={currentTheme}>
        <Header toggleTheme={() => setIsDarkMode(!isDarkMode)} />
        <App />
      </ThemeProvider>
    </StrictMode>
  );
};

export default Root;
