import React from 'react';
import { shallow, configure } from "enzyme";
import CartMenu from "./CartMenu";
import { Typography } from "@material-ui/core";
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});
const setup = (total) => {
  const actions = {
    buy: jest.fn()
  };

  const wrapper = shallow(<CartMenu {...actions} total={total}/>);

  return {
    wrapper
  };
};

describe("Cart Menu component", () => {
  it("should display right total", () => {
    const { wrapper } = setup(5);
    const message = wrapper.find(Typography);
    
    expect(message.text()).toMatch(/^5 - Articulos$/);
  });
});
