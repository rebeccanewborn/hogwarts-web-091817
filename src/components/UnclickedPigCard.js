import React from "react";

class UnclickedPigCard extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="card" onClick={this.props.handleClick}>
				<div className="image">
					<img
						src="https://media.istockphoto.com/photos/pig-picture-id105614536"
						alt=""
					/>
				</div>
				<div className="content">
					<div className="header">{this.props.pig.name}</div>
				</div>
			</div>
		);
	}
}

export default UnclickedPigCard;
