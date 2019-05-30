import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Grid,
  Collapse,
  Hidden,
  ListItem,
  List,
  Button,
  Badge,
  AppBar,
  Toolbar
} from "@material-ui/core";
import PropTypes from 'prop-types'
import { ShoppingCart } from "@material-ui/icons";
import { Link } from "react-router-dom";
import MenuItem from "../menu-item/MenuItem";
import { selectSublevel } from "../../../actions/categoriesAction";

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openCategories: false
    };
  }

  toggleCategories = () => {
    this.setState({ openCategories: !this.state.openCategories });
  };

  getCategories = (direction, position) => {
    const { categories } = this.props;
    return (
      <List style={{ display: "flex", flexDirection: direction, padding: 0 }}>
        <ListItem
          button
          onClick={() => this.props.selectSublevel(null)}
          style={{ width: 130 }}
        >
          Todos
        </ListItem>
        {categories.map(category => {
          return (
            <MenuItem
              key={category.id}
              item={category}
              position={position}
              handleSelection={this.handleSelection}
            />
          );
        })}
      </List>
    );
  };

  getBadge = () => {
    const { cart } = this.props;
    return (
      <Link to="/cart" style={{ padding: "10px 20px" }}>
        <Badge color="secondary" badgeContent={cart.length}>
          <ShoppingCart style={{ color: "#fff", fontSize: "30" }} />
        </Badge>
      </Link>
    );
  };

  handleSelection = item => {
    if (item && !item.sublevels) {
      this.props.selectSublevel(item);
      this.toggleCategories();
    }
  };

  render() {
    const { openCategories } = this.state;

    return (
      <AppBar>
        <Toolbar>
          <Hidden mdDown>
            <Grid container justify="space-between" alignItems="center">
              <Grid item md={6}>
                {this.getCategories("row", "absolute")}
              </Grid>
              <Grid item md={1}>
                {this.getBadge()}
              </Grid>
            </Grid>
          </Hidden>
          <Hidden mdUp>
            <Grid container justify={"space-between"} alignItems={"center"}>
              <Grid>
                <Button
                  onClick={this.toggleCategories}
                  style={{ color: "#fff" }}
                >
                  Categories
                </Button>
                <Collapse in={openCategories}>
                  {this.getCategories("column", "relative")}
                </Collapse>
              </Grid>
              {this.getBadge()}
            </Grid>
          </Hidden>
        </Toolbar>
      </AppBar>
    );
  }
}

Categories.propTypes = {
  categories: PropTypes.array.isRequired,
  selectSublevel: PropTypes.func.isRequired,
  cart: PropTypes.array.isRequired
}

const mapStateToProps = ({ categories, cart }) => {
  return {
    categories: categories.categories,
    cart: cart.cart
  };
};

const mapDispatchToProps = {
  selectSublevel
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories);
