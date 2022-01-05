import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import AppRouter from "./router";
import { Store, persistor } from "@redux";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { defaultTheme } from "./themes/defaultTheme";
import DarkModeProvider from "@components/Header/DarkModeContext";

/**
 * @description Check if browser is Safar
 * @description It'll be usefull for web notifications
 */

if (window.safari) {
  console.log("safari browser detected");
} else {
  // initializeFirebase();
}

function App() {

  const currentTheme = createTheme(defaultTheme);

  return (
    <Provider store={Store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={currentTheme}>
          <DarkModeProvider>
            <AppRouter />
          </DarkModeProvider>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
