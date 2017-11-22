import React from "react";

class ClickedPigCard extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		console.log(this.props.pig);
		return <div className="card">Hi</div>;
	}
}

export default ClickedPigCard;
