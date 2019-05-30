import React, { Fragment } from "react";
import { connect } from "react-redux";
import {
  Radio,
  FormLabel,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Card,
  CardContent
} from "@material-ui/core";
import PropTypes from 'prop-types';
import { pushSort } from "../../../actions/sortActions";

const Sort = props => {
  const handleChangeSort = ({ target }) => {
    const { value } = target;
    props.pushSort({ sortBy: value });
  };

  const {
    sort: { sortBy }
  } = props;
  return (
    <Fragment >
      <Card>
        <CardContent>
          <FormControl>
            <FormLabel>Ordenar</FormLabel>
            <RadioGroup value={sortBy} onChange={(e) => handleChangeSort(e)} row>
              <FormControlLabel
                label="Disponible"
                control={<Radio />}
                value={"available"}
              />
              <FormControlLabel
                label="Precio"
                control={<Radio />}
                value={"price"}
              />
              <FormControlLabel
                label="Cantidad"
                control={<Radio />}
                value={"quantity"}
              />
            </RadioGroup>
          </FormControl>
        </CardContent>
      </Card>
    </Fragment>
  );
};

Sort.propTypes = {
  pushSort: PropTypes.func.isRequired,
  sort: PropTypes.object.isRequired
}

const mapStateToProps = ({ sort }) => {
  return {
    sort: sort.data
  };
};

const mapDispatchToProps = {
  pushSort
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sort);
