import React from "react";
import { connect } from "react-redux";
import {
  Radio,
  FormLabel,
  FormControl,
  RadioGroup,
  FormControlLabel,
  TextField,
  Grid,
  FormGroup,
  Card,
  CardContent
} from "@material-ui/core";
import { pushFilter } from "../../../actions/filterActions";

const Filter = props => {
  const handleChangeAvailability = ({ target }) => {
    const { value } = target;
    props.pushFilter({ available: value });
  };

  const handleChangePrice = ({ target }) => {
    const { name, value } = target;
    props.pushFilter({ [name]: value });
  };

  const {
    filter: { available, priceFrom, priceTo, quantity }
  } = props;

  return (
    <Grid item>
      <Card>
        <CardContent>
          <FormControl component="fieldset">
            <FormLabel>Availability</FormLabel>
            <RadioGroup
              value={available || "all"}
              onChange={(e) => handleChangeAvailability(e)}
              row
            >
              <FormControlLabel label="All" control={<Radio />} value={"all"} />
              <FormControlLabel
                label="Available"
                control={<Radio />}
                value={"true"}
              />
              <FormControlLabel
                label="No Available"
                control={<Radio />}
                value={"false"}
              />
            </RadioGroup>
          </FormControl>
          <FormGroup row>
            <TextField
              name="priceFrom"
              label="Price From"
              type="number"
              value={priceFrom}
              onChange={(e) => handleChangePrice(e)}
            />
            <TextField
              name="priceTo"
              label="Price To"
              type="number"
              value={priceTo}
              onChange={(e) => handleChangePrice(e)}
            />
          </FormGroup>
          <FormControl>
            <TextField
              name="quantity"
              label="Quantity"
              type="number"
              value={quantity}
              onChange={(e) => handleChangePrice(e)}
            />
          </FormControl>
        </CardContent>
      </Card>
    </Grid>
  );
};

const mapStateToProps = ({ filter }) => {
  return {
    filter: filter.data
  };
};

const mapDispatchToProps = {
  pushFilter
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);
