import React from "react";
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import axios from "axios";

import Jobs from "./Jobs";

configure({ adapter: new Adapter() });

jest.mock("axios");

describe("Jobs", () => {

  it("the state of page is changed once the next button is clicked", () => {
    const wrapper = shallow(<Jobs />);
    // const mock = jest.fn()
    const button = wrapper.find("button")

    expect(wrapper.state().page).toEqual(0);
    button.simulate("click");
    expect(wrapper.state().page).toEqual(1);
  });
});

//   it("the state is reset when the next button is clicked", () => {
//     const res = [{ data: "it works" }];
//     const renderJobs = shallow(<Jobs />);
//     return renderJobs.dataJobs().then(jobs => expect(jobs).toEqual(res));
//   });