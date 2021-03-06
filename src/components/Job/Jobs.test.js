import React from "react";
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import axios from "axios";
import sinon from "sinon";

import Jobs from "./Jobs";

configure({ adapter: new Adapter() });

jest.mock("axios");

describe("Jobs", () => {
  it("shows the state of page is increaces once the next button is clicked", () => {
    const wrapper = shallow(<Jobs />);
    // const mock = jest.fn()
    const button = wrapper.find(".next");

    expect(wrapper.state().page).toEqual(1);
    button.simulate("click");
    expect(wrapper.state().page).toEqual(2);
  });

  it("shows the state of the page decrease once the prev button is clicke", () => {
    const wrapper = shallow(<Jobs />);
    const button = wrapper.find(".prev");

    expect(wrapper.state().page).toEqual(1);
    button.simulate("click");
    expect(wrapper.state().page).toEqual(0);
  })

  it("ensures the state is set", () => {
      const mockData = {
          jobs:[],
          pages:0
      }
    const promise = Promise.resolve(mockData);
    sinon.stub(window, "fetch").callsFake(() => promise);

    const wrapper = mount(<Jobs />);

    return promise
      .then(() => {
        // expect(wrapper.state()).toHaveProperty("loaded", true);
        expect(wrapper.state("loaded")).toEqual(true)

        wrapper.update();
      })
      .then(() => {
        expect(wrapper.text()).toContain("JOBS");
      });
  });
});
