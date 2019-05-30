import React from "react";
import { shallow, configure } from "enzyme";
import { Cart } from "./Cart";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });
const setup = cartItems => {

  const actions = {
    increaseItemCant: jest.fn(),
    removeItem: jest.fn(),
    buy: jest.fn()
  };

  const wrapper = shallow(<Cart {...actions} cart={cartItems} />);

  return {
    wrapper
  };
};

describe("Cart Menu component", () => {
  let cart;
  beforeEach(() => {
    cart = [
      { item: { id: 1, name: "item-1", price: "123", cant: "5" } },
      { item: { id: 2, name: "item-2", price: "456", cant: "6" } }
    ];
  });

  it("should display all the items", () => {
    const { wrapper } = setup(cart);
    const grid = wrapper.find("#cartItemsContainer");
    expect(grid.children().length).toEqual(2);
  });
});
