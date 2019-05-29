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
            <FormLabel>Sort By</FormLabel>
            <RadioGroup value={sortBy} onChange={(e) => handleChangeSort(e)} row>
              <FormControlLabel
                label="Available"
                control={<Radio />}
                value={"available"}
              />
              <FormControlLabel
                label="Price"
                control={<Radio />}
                value={"price"}
              />
              <FormControlLabel
                label="Quantity"
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
