import { inject, observer } from "mobx-react/index";
import React from "react";

export class MyComponent extends React.Component {

    render() {
        return (
            <div>
                <MyPlainComponent />
                <MyClassComponent />
            </div>
        );
    }
}

@inject("myStorePlain")
@observer
export class MyPlainComponent extends React.Component {

    componentWillMount() {
        setInterval(() => {
            this.props.myStorePlain.inc();
            console.log("plain changed value");
        }, 500);
    }

    render() {
        return (
            <div>
                <h1>Plain object: {this.props.myStorePlain.plainObject.b.c.nr}</h1>
            </div>
        );
    }
}

@inject("myStoreClass")
@observer
export class MyClassComponent extends React.Component {

    componentWillMount() {
        setInterval(() => {
            this.props.myStoreClass.inc();
            console.log("class changed value");
        }, 500);
    }

    render() {
        return (
            <div>
                <h1>Plain object: {this.props.myStoreClass.classObject.b.c.nr}</h1>
            </div>
        );
    }
}