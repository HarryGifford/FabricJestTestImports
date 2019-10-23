import React from "react";
import MyComponent from "./MyComponent";

describe("Simple test", () => {
    it("Test 1", () => {
        const xx = <MyComponent key="a"/>;
        expect(xx.key).toEqual("a");
    })
});
