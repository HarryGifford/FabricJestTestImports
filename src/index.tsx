 
import React from "react";
import ReactDOM from "react-dom";

import {
    initializeIcons
} from "office-ui-fabric-react";

import MyComponent from "./MyComponent";

const main = () => {
    initializeIcons();
    ReactDOM.render(<MyComponent />, document.getElementById("root"));
};

main();
