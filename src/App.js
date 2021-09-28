import { Provider } from "react-redux";

import Home from "./pages/Home";

import store from "./store";

import { Reset } from "styled-reset";
import GlobalStyle from "./themes/globalStyles";

function App() {
  return (
    <Provider store={store}>
      <Reset />
      <GlobalStyle />
      <Home />
    </Provider>
  );
}

export default App;
