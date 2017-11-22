import React from "react";

class ClickedPigCard extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		console.log(this.props.pig);
		return (
			<div className="card" onClick={this.props.handleClick}>
				<div className="content">
					<div className="header">{this.props.pig.name}</div>
					<div className="description">{this.props.pig.specialty}</div>
				</div>
			</div>
		);
	}
}

export default ClickedPigCard;
