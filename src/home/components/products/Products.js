import React from "react";
import { connect } from "react-redux";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button
} from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Add } from '@material-ui/icons';
import { addItemToCart } from "../../../actions/cartActions";
import { getFilteredProducts } from "../../../selectors/productsSelector";

const Products = ({ item, products, addItemToCart }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} spacing={2}>
      {products &&
        products.map(product => {
          return (
            (!item || item.id === product.sublevel_id) && (
              <Grid item key={product.id} md={2} xs={6}>
                <Card>
                  <CardContent>
                    <Typography>Name: {product.name}</Typography>
                    <Typography>Quantity: {product.quantity}</Typography>
                    <Typography>
                      Available: {String(product.available)}
                    </Typography>
                    <Typography>Price: {product.price}</Typography>
                  </CardContent>
                  <CardActions className={classes.actions}>
                    <Button onClick={() => addItemToCart(product)} className={classes.button}>
                      <Add />
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            )
          );
        })}
    </Grid>
  );
}

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      marginTop: 40
    },
    button: {
      backgroundColor: '#9ebac1'
    },
    actions: {
      justifyContent: 'center'
    }
  })
);

const mapStateToProps = ({ categories, products, filter, sort }) => {
  return {
    item: categories.data,
    products: getFilteredProducts({ products, filter, sort }),
    filter: filter.data
  };
};

const mapDispatchToProps = {
  addItemToCart
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
