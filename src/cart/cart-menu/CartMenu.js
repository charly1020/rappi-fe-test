import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Grid, Button, Typography } from "@material-ui/core";
import { Home } from "@material-ui/icons";
import PropTypes from "prop-types";

const CartMenu = ({ buy, total }) => {
  return (
    <AppBar>
      <Toolbar>
        <Grid item container justify="space-between">
          <Grid item>
            <Link to={"/"}>
              <Home style={{ color: "#fff", fontSize: "40" }} />
            </Link>
          </Grid>
          <Grid
            item
            container
            direction={"row"}
            xs={8} md={2}
            alignItems={"center"}
            spacing={2}
          >
            <Grid item>
              <Button
                onClick={() => buy()}
                color="secondary"
                variant="contained"
                style={{ color: "#fff", fontSize: "40" }}
              >
                Comprar
              </Button>
            </Grid>
            <Grid item>
              <Typography>{total} - Articulos</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

CartMenu.propTypes = {
  buy: PropTypes.func.isRequired,
  total: PropTypes.number
};

export default CartMenu;
