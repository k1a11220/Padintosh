import React, { useState } from "react";
import AppRouter from "routes/Router";
import { ThemeProvider } from "styled-components";

function App() {
  const [dark, setDark] = useState(true);
  const toggleDark = () => {
    if (dark === true) {
      setDark(!dark);

      console.log("Light mode");
    } else {
      setDark(!dark);
      console.log("Dark mode");
    }
  };
  const theme = {
    colors: {
      bgColor: "#121212",
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <AppRouter toggleDark={toggleDark}></AppRouter>
    </ThemeProvider>
  );
}

export default App;
