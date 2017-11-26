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
				<label>Sort By</label>
				<select onChange={this.props.handleSortMethod}>
					<option value="name">Name</option>
					<option value="weight">Weight</option>
				</select>
			</div>
		);
	}
}

export default Filter;
