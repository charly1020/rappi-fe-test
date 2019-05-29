import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Grid, Button } from "@material-ui/core";
import { Home } from "@material-ui/icons";

const CartMenu = ({buy}) => {
  return (
    <AppBar>
      <Toolbar>
        <Grid item container justify="space-between">
          <Grid item>
            <Link to={"/"}>
              <Home style={{ color: "#fff", fontSize: "40" }} />
            </Link>
          </Grid>
          <Grid>
            <Button
              onClick={() => buy()}
              color="secondary"
              variant="contained"
              style={{ color: "#fff", fontSize: "40" }}
            >
              Comprar
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default CartMenu;
