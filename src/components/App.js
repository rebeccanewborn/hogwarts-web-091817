import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import pigs from "../porkers_data";
import PigsLister from "./PigsLister";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pigs: pigs
		};
	}
	render() {
		return (
			<div className="App">
				<Nav />

				<PigsLister pigs={this.state.pigs} />
			</div>
		);
	}
}

export default App;
