import React from "react";
import ReactDOM from "react-dom";
import dayjs from "dayjs";
import "dayjs/locale/ja";
import { Provider } from "react-redux";
import { createStore } from "redux";

dayjs.locale("ja");

import CalendarBoard from "./components/CalendarBoard"

import rootReducer from "./redux/rootReducer";

// createStore関数にreducerを渡すことでstoreを作成
const store = createStore(rootReducer);

const App = () => (
  <Provider store={store}>
    <CalendarBoard />
  </Provider>
)

ReactDOM.render(<App />, document.getElementById("root"));
