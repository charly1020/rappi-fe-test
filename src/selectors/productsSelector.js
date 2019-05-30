import { createSelector } from "reselect";

const selectProducts = ({ products }) => products.data;
const selectFilter = ({ filter }) => filter.data;
const selectSort = ({ sort }) => sort.data;

export const getFilteredProducts = createSelector(
  [selectProducts, selectFilter, selectSort],
  (products, filter, sort) => {
    const productsFiltered = products.filter(product => {
      const available = filter && filter.available === "true";
      return (
        !filter ||
        (
         (filter.available === "all" || available === product.available) &&
         (!filter.priceFrom || filter.priceFrom <= product.priceVal) &&
         (!filter.priceTo || filter.priceTo >= product.priceVal) &&
         (!filter.quantity || +filter.quantity === product.quantity) &&
         (!filter.itemName || product.name.includes(filter.itemName.toLowerCase()))
         )
      );
    });
    sortProducts(productsFiltered, sort);
    return productsFiltered;
  }
);

const sortProducts = (products, sort) => {
  switch(sort.sortBy) {
    case "price":
        products.sort((a,b) => { return a.priceVal - b.priceVal});
      break;
    case "quantity":
      products.sort((a,b) => { return a.quantity - b.quantity});
      break;
      case "available":
        products.sort((a,b) => { return a.available ? -1 : 1});
        break;
    default: 
        return;
  }
}
