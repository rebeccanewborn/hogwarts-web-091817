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

	filterPigs = pigs => {
		this.setState({
			pigs: this.state.pigs.filter(pig => pig.greased === true)
		});
	};

	dontFilterPigs = pigs => {
		this.setState({
			pigs: pigs
		});
	};

	handleCheck = ev => {
		this.state.greasedOnly === false
			? this.filterPigs(pigs)
			: this.dontFilterPigs(pigs);
		this.setState(prevState => {
			return { greasedOnly: !prevState.greasedOnly };
		});
	};

	handleSort(ev) {
		if (ev.target.value === "name") {
			let nameSorted = pigs.sort((a, b) => {
				return a.name.localeCompare(b.name);
			});
			this.setState({ pigs: nameSorted });
		} else if (ev.target.value === "weight") {
			let weightSorted = pigs.sort((a, b) => {
				return (
					b[
						"weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
					] -
					a[
						"weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
					]
				);
			});
			this.setState({ pigs: weightSorted });
		}
	}

	render() {
		return (
			<div className="App">
				<Nav />
				<Filter
					handleCheckMethod={this.handleCheck.bind(this)}
					greasedOnly={this.state.greasedOnly}
					handleSortMethod={this.handleSort.bind(this)}
				/>
				<br />
				<PigsLister pigs={this.state.pigs} />
			</div>
		);
	}
}

export default App;
