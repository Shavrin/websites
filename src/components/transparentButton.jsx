import React, { Component } from 'react';
import styles from '../styles/button.css';

class TransparentButton extends Component {
  constructor(props) {
    super(props);
    this.setState({ clicked: true });
  }

  render() {
    const { name } = this.props;

    return <div className="button transparent">{name}</div>;
  }
}

export default TransparentButton;
