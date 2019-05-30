import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Products } from "./Products";
import { Card } from "@material-ui/core";

configure({ adapter: new Adapter() });
const setup = (item, products) => {
  const actions = {
    addItemToCart: jest.fn()
  };

  const wrapper = shallow(
    <Products {...actions} item={item} products={products} />
  );

  return {
    wrapper
  };
};

describe("Products component", () => {
  let products = [
    {
      id: 1,
      sublevel_id: 181818,
      name: "product-1",
      quantity: 234,
      available: false
    },
    {
      id: 2,
      sublevel_id: 191919,
      name: "product-2",
      quantity: 432,
      available: true
    }
  ];
  let item = { id: 191919 };

  it("should display two products in the list - no filter", () => {
    const { wrapper } = setup(null, products);
    expect(wrapper.find(Card).length).toEqual(2);
  });

  it("should display one products in the list- whit filter", () => {
    const { wrapper } = setup(item, products);
    expect(wrapper.find(Card).length).toEqual(1);
  });
});
