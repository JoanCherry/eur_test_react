import React from "react";
import App from "./App";

it("should contain this component", () => {
  const wrapper = shallow(<App/>);
  expect(wrapper).toMatchSnapshot();
});