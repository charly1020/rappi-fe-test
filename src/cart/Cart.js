import React, { Fragment } from "react";
import { connect } from "react-redux";
import {
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
  Grid
} from "@material-ui/core";
import PropTypes from "prop-types";
import { increaseItemCant, removeItem, buy } from "../actions/cartActions";
import CartMenu from "./cart-menu/CartMenu";

export const Cart = ({ cart, increaseItemCant, removeItem, buy }) => {
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
    <Fragment>
      <CartMenu buy={buyItems} total={cart.length} />
      <Grid
        id="cartItemsContainer"
        container
        style={{ marginTop: 70 }}
        spacing={4}
      >
        {cart.map(itemCart => {
          return (
            <Grid item key={itemCart.item.id} xs={6} md={2}>
              <Card>
                <CardContent>
                  <Typography>Nombre: {itemCart.item.name}</Typography>
                  <Typography>Cantidad: {itemCart.cant}</Typography>
                  <Typography>Precio: {itemCart.item.price}</Typography>
                </CardContent>
                <CardActions>
                  <Button
                    color="primary"
                    onClick={() => addMore(itemCart.item.id)}
                  >
                    Agregar
                  </Button>
                  <Button
                    color="secondary"
                    onClick={() => remove(itemCart.item.id)}
                  >
                    Eliminar
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Fragment>
  );
};

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  increaseItemCant: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  buy: PropTypes.func.isRequired
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
