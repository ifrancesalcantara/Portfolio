import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux"

import App from "./App";

import appStore from "./redux/store/store"


ReactDOM.render(
    <Provider store={appStore}>
        <App />
    </Provider>,
    document.getElementById("root")
);