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
import PropTypes from "prop-types";
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
    filter: { available, priceFrom, priceTo, quantity, itemName },
    item
  } = props;
  return (
    <Grid item>
      <Card>
        <CardContent>
          <FormControl component="fieldset">
            <FormLabel>Disponibilidad</FormLabel>
            <RadioGroup
              value={available || "todos"}
              onChange={e => handleChangeAvailability(e)}
              row
            >
              <FormControlLabel label="Todos" control={<Radio />} value={"all"} />
              <FormControlLabel
                label="Disponible"
                control={<Radio />}
                value={"true"}
              />
              <FormControlLabel
                label="No Disponible"
                control={<Radio />}
                value={"false"}
              />
            </RadioGroup>
          </FormControl>
          <FormGroup row>
            <TextField
              name="priceFrom"
              label="Precio Desde"
              type="number"
              value={priceFrom}
              onChange={e => handleChangePrice(e)}
            />
            <TextField
              name="priceTo"
              label="Precio Hasta"
              type="number"
              value={priceTo}
              onChange={e => handleChangePrice(e)}
            />
          </FormGroup>
          <FormControl>
            <TextField
              name="quantity"
              label="Cantidad"
              type="number"
              value={quantity}
              onChange={e => handleChangePrice(e)}
            />
          </FormControl>
          {item && (
            <FormControl>
              <TextField
                name="itemName"
                label="Nombre"
                type="text"
                value={itemName}
                onChange={e => handleChangePrice(e)}
              />
            </FormControl>
          )}
        </CardContent>
      </Card>
    </Grid>
  );
};

Filter.propTypes = {
  pushFilter: PropTypes.func.isRequired,
  filter: PropTypes.object.isRequired
};

const mapStateToProps = ({ filter, categories }) => {
  return {
    item: categories.data,
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
