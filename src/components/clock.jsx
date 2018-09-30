import React, { Component } from 'react'

export default class Clock extends Component {
	constructor(props){
		super(props);
		this.state = {date: new Date()};
	}

	componentDidMount(){
		this.timerID = setInterval(
			() => this.tick(),
			1000
		);
	}
	componentWillMount(){
		clearInterval(this.timerID);
	}
	tick(){
		this.setState({
			date: new Date()
		});
	}
	render() {
		return (
			<div>
				<h1>Clocky Clock!</h1>
				<h2>It is {this.state.date.toLocaleTimeString()}.</h2>
			</div>
		)
	}
}
