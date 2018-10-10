import React, { Component } from 'react';
import styles from '../styles/button.css';

class Button extends Component {
  constructor(props) {
    super(props);
    this.setState({ clicked: true });
  }

  render() {
    const { name, transparent } = this.props;

    return <div className="button">{name}</div>;
  }
}

export default Button;
