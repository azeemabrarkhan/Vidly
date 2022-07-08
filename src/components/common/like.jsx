import React, { Component } from "react";
import PropTypes from "prop-types";

class Like extends Component {
  render() {
    let classes = "clickable fa fa-heart";
    if (!this.props.liked) classes += "-o";
    return (
      <i className={classes} onClick={this.props.onLike} aria-hidden="true"></i>
    );
  }
}

Like.propTypes = {
  liked: PropTypes.bool,
  onLike: PropTypes.func.isRequired,
};

export default Like;
