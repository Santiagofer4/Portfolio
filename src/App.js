import { BrowserRouter, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import './App.css';
import Inicio from './views/Inicio';
import * as theme from "./config/theme"


function App() {
  return (
    <BrowserRouter>
    <ThemeProvider theme={theme}>
    <Route path="/" component={Inicio} />
    </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
