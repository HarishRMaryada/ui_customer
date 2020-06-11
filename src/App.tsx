import React from "react";
import { Provider } from "react-redux";
import Schedule from "./Components/Schedule";

import store from "./Store";

function App() {
  return (
    <Provider store={store}>
      <Schedule />
    </Provider>
  );
}

export default App;
