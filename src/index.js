import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import createBrowserHistory from 'history/createBrowserHistory';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import { Router } from 'react-router';

import { MyStoreClass, MyStorePlain } from "./store";
import { MyComponent } from "./component";

const browserHistory = createBrowserHistory();
const routingStore = new RouterStore();
const history = syncHistoryWithStore(browserHistory, routingStore);


const stores = {
    routing: routingStore,
    myStorePlain: new MyStorePlain(),
    myStoreClass: new MyStoreClass()
};

ReactDOM.render(
    <Provider {...stores}>
        <Router history={history}>
            <MyComponent />
        </Router>
    </Provider>,
    document.getElementById("root")
);

