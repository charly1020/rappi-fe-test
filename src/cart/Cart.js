import React from "react";
import { connect } from "react-redux";
import {
  ListItem,
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
  Grid
} from "@material-ui/core";
import { increaseItemCant, removeItem, buy } from "../actions/cartActions";
import CartMenu from "./components/cart-menu/CartMenu";

const Cart = ({ cart, increaseItemCant, removeItem, buy }) => {
  const addMore = itemId => {
    increaseItemCant(itemId);
  };

  const remove = itemId => {
    removeItem(itemId);
  };

  const buyItems = () => {
    buy();
  };

  return (
    <Grid container style={{ marginTop: 70 }}>
      <CartMenu buy={buyItems} />
      {cart.map(itemCart => {
        return (
          <Grid item key={itemCart.item.id} xs={6} md={2}>
            <ListItem key={itemCart.item.id}>
              <Card>
                <CardContent>
                  <Typography>Name: {itemCart.item.name}</Typography>
                  <Typography>Quantity: {itemCart.cant}</Typography>
                  <Typography>Price: {itemCart.item.price}</Typography>
                </CardContent>
                <CardActions>
                  <Button
                    color="primary"
                    onClick={() => addMore(itemCart.item.id)}
                  >
                    Add More
                  </Button>
                  <Button
                    color="secondary"
                    onClick={() => remove(itemCart.item.id)}
                  >
                    Remove
                  </Button>
                </CardActions>
              </Card>
            </ListItem>
          </Grid>
        );
      })}
    </Grid>
  );
};

const mapStateToProps = ({ cart }) => {
  return {
    cart: cart.cart
  };
};

const mapDispatchToProps = {
  increaseItemCant,
  removeItem,
  buy
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
