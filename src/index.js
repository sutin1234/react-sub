import { render } from "react-dom";
import {
  BrowserRouter
} from "react-router-dom";
import App from './App'
render(
  <BrowserRouter basename="https://sutin1234.github.io/react-sub/">
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);