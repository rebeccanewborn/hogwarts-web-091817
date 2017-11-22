import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import pigs from "../porkers_data";
import PigsLister from "./PigsLister";
import Filter from "./Filter";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pigs: pigs,
			greasedOnly: false
		};
	}

	handleCheck(ev) {
		this.setState(prevState => {
			return { greasedOnly: !prevState.greasedOnly };
		});
	}

	render() {
		return (
			<div className="App">
				<Nav />
				<Filter
					handleCheckMethod={this.handleCheck.bind(this)}
					greasedOnly={this.state.greasedOnly}
				/>
				<br />
				<PigsLister pigs={this.state.pigs} />
			</div>
		);
	}
}

export default App;
