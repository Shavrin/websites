import React, { Component } from 'react';
import Title from './title';
import Button from './button';
import '../styles/navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="navbar">
        <div className="navbar-left">
          <Title name="Interplanetary" />
          <Button name="One" transparent />
          <Button name="Two" transparent />
          <Button name="Three" transparent />
        </div>
        <div className="navbar-right">
          <Button name="My Account" transparent />
          <Button name="Login" />
        </div>
      </div>
    );
  }
}

export default Navbar;
