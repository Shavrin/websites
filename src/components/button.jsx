import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/button.css';
import '../styles/styles.css';

class Button extends Component {
  constructor(props) {
    super(props);
    this.setState({ clicked: true });
  }

  render() {
    const { name, transparent } = this.props;

    return transparent ? (
      <div className="button transparent">{name}</div>
    ) : (
      <div className="button">{name}</div>
    );
  }
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  transparent: PropTypes.bool,
};

Button.defaultProps = {
  transparent: false,
};
export default Button;
