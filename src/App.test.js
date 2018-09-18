import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router";
import renderer from "react-test-renderer";
import { shallow, mount } from "enzyme";

import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

test("App snapshot test", () => {
  const component = renderer.create(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
