import React from "react";
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import axios from "axios";
import sinon from "sinon";

import Activity from "./Activities";

configure({ adapter: new Adapter() });

// jest.mock("axios");

describe("Activity", () => {
    

  it("the state of page is changed once the next button is clicked", () => {
    const wrapper = shallow(<Activity />);
    const button = wrapper.find("button")

    expect(wrapper.state().page).toEqual(0);
    button.simulate("click");
    expect(wrapper.state().page).toEqual(1);
  });

  it("ensures the state is set", () => {
    const mockData = {
        dataAfter:[{job:"clerk", location: "Brooklyn"}],
        page:0
    }
  const promise = Promise.resolve(mockData);
  const save = sinon.stub(global, "fetch").callsFake(() => {return promise});;

  const wrapper = mount(<Activity />);

  return promise
    .then(() => {
      expect(wrapper.state("loaded")).toEqual(true);

      wrapper.update();
    })
    .then(() => {
      expect(wrapper.text()).toContain("Activities");
    });
});
});

