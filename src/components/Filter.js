import React from "react";

class Filter extends React.Component {
	render() {
		return (
			<div>
				<label>Greased?</label>
				<input
					type="checkbox"
					onChange={this.props.handleCheckMethod}
					value={this.props.greasedOnly}
				/>
			</div>
		);
	}
}

export default Filter;
