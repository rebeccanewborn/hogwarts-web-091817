import React from "react";
import UnclickedPigCard from "./UnclickedPigCard";
import ClickedPigCard from "./ClickedPigCard";

class PigCardContainer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isClicked: false
		};

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState(prevState => {
			return { isClicked: !prevState.isClicked };
		});
	}

	render() {
		return this.state.isClicked ? (
			<ClickedPigCard pig={this.props.pig} onClick={this.handleClick} />
		) : (
			<UnclickedPigCard pig={this.props.pig} onClick={this.handleClick} />
		);
	}
}

export default PigCardContainer;
