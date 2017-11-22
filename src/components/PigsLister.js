import React from "react";
import PigCardContainer from "./PigCardContainer";

class PigsLister extends React.Component {
	render() {
		let pigCards = this.props.pigs.map(pigcard => {
			return <PigCardContainer key={pigcard.name} pig={pigcard} />;
		});
		return <div className="ui link cards">{pigCards}</div>;
	}
}

export default PigsLister;
