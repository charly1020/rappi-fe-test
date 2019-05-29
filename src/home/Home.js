import React, { Fragment } from "react";
import { connect } from "react-redux";
import { getProductList } from "../actions/productsAction";
import { getCategoriesList } from "../actions/categoriesAction";
import Filter from "./components/filter/Filter";
import Products from "./components/products/Products";
import Sort from "./components/sort/Sort";
import { Grid } from "@material-ui/core";
import Categories from "./components/categories/Categories";

const Home = ({ getProductList, getCategoriesList }) => {
  getProductList();
  getCategoriesList();

  return (
    <Fragment>
      <Categories />
      <Grid item container justify="space-around" style={{ marginTop: 80 }}>
        <Grid item md={4} xs={12}>
          <Filter />
        </Grid>
        <Grid item md={4} xs={12}>
          <Sort />
        </Grid>
      </Grid>
      <Products style={{ marginTop: "30px" }} />
    </Fragment>
  );
};

const mapDispatchToProps = {
  getProductList,
  getCategoriesList
};

export default connect(
  null,
  mapDispatchToProps
)(Home);
