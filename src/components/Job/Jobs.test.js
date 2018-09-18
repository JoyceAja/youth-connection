import React from "react";
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import axios from "axios";
import sinon from "sinon";

import Jobs from "./Jobs";

configure({ adapter: new Adapter() });

jest.mock("axios");

describe("Jobs", () => {
  it("the state of page is changed once the next button is clicked", () => {
    const wrapper = shallow(<Jobs />);
    // const mock = jest.fn()
    const button = wrapper.find("button");

    expect(wrapper.state().page).toEqual(0);
    button.simulate("click");
    expect(wrapper.state().page).toEqual(1);
  });

  it("ensures the state is set", () => {
      const mockData = {
          jobs:[],
          pages:0
      }
    const promise = Promise.resolve(mockData);
    sinon.stub(global, "fetch").callsFake(() => promise);

    const wrapper = mount(<Jobs />);

    return promise
      .then(() => {
        expect(wrapper.state()).toHaveProperty("jobs");

        wrapper.update();
      })
      .then(() => {
        expect(wrapper.text()).toContain("JOBS");
      });
  });
});
