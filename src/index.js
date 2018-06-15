import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import { MyStoreClass, MyStorePlain } from "./store";
import { MyComponent } from "./component";

const stores = {
    myStorePlain: new MyStorePlain(),
    myStoreClass: new MyStoreClass()
};

ReactDOM.render(
    <Provider {...stores}>
        <MyComponent />
    </Provider>,
    document.getElementById("root")
);

