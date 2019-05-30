import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { MenuItem } from "./MenuItem";

configure({ adapter: new Adapter() });
const setup = ({item, position}) => {

  const actions = {
    handleSelection: jest.fn()
  };

  const wrapper = shallow(<MenuItem {...actions} item={item} position={position} />);

  return {
    wrapper
  };
};

describe("Menu Item component", () => {
  let menuItemPropsNoSublevels = {
      item: {name: 'level-1'}, 
      position: 'row'
  };

  let menuItemPropsWithSublevels = {
    item: {name: 'level-1', sublevels: [{ id: 1, name: 'level-2'}]}, 
    position: 'row'
};

  it("Menu Item - no sublevels - should no show MenuItem", () => {
    const { wrapper } = setup(menuItemPropsNoSublevels);
    expect(wrapper.find(MenuItem).length).toEqual(0);
  });

  it("Menu Item - with sublevels - should no show MenuItem", () => {
    const { wrapper } = setup(menuItemPropsWithSublevels);
    expect(wrapper.find(MenuItem).length).toEqual(1);
  });

});
