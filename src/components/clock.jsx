import React from 'react';

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    const { name } = this.props;
    const { date } = this.state;
    return (
      <div>
        <h1>{name}</h1>
        <h2>
          It is
          {date.toLocaleTimeString()}
.
        </h2>
      </div>
    );
  }
}
