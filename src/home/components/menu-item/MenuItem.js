import React, { Component } from "react";
import { connect } from "react-redux";
import {
  ListItem,
  Collapse,
  MenuList
} from "@material-ui/core";
import PropTypes from 'prop-types';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { selectSublevel } from "../../../actions/categoriesAction";

export class MenuItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  show = () => {
    this.setState({ open: true });
  };

  hidde = () => {
    this.setState({ open: false });
  };

  render() {
    const { item, handleSelection, position } = this.props;
    const { open } = this.state;

    return (
      <div
        onMouseOver={this.show}
        onMouseLeave={this.hidde}
        style={{ width: 200 }}
      >
        <ListItem button onClick={() => handleSelection(item)}>
          {item.name}
          {item.sublevels &&
            <ExpandMoreIcon />}
        </ListItem>
        {item.sublevels && (
          <Collapse
            in={open}
            style={{ position, backgroundColor: "#3f51b5" }}
          >
            <MenuList>
              {item.sublevels.map(sublevel => {
                return (
                  <MenuItem
                    key={sublevel.id}
                    item={sublevel}
                    handleSelection={handleSelection}
                  />
                );
              })}
            </MenuList>
          </Collapse>
        )}
      </div>
    );
  }
}

MenuItem.propTypes = {
  item: PropTypes.object.isRequired,
  handleSelection: PropTypes.func.isRequired,
  position: PropTypes.string
}

const mapDispatchToProps = {
  selectSublevel
};

export default connect(
  null,
  mapDispatchToProps
)(MenuItem);
