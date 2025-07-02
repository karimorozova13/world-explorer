import { createRoot } from "react-dom/client";
import Root from "./components/Root";

// createRoot(document.getElementById("root")!).render(
//     const [isDarkMode, setIsDarkMode] = useState(false);

//   const currentTheme: ThemeType = isDarkMode ? darkTheme : lightTheme;
//   <StrictMode>
//     <ThemeProvider theme={lightTheme}>
//       <Header toggleTheme={() => setIsDarkMode(!isDarkMode)}/>
//       <App />
//     </ThemeProvider>
//   </StrictMode>
// );

createRoot(document.getElementById("root")!).render(<Root />);
