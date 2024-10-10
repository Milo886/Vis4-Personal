import React from 'react';

function MainContent(props) {

	return (
		<div className="content">
			<h3> Control Center </h3>
			<div className="buttonControls">
				<button onClick={props.onRemoveTwo}>-2</button>
				<button onClick={props.onRemoveOne}>-1</button>
				<button onClick={props.onReset}>0</button>
				<button onClick={props.onAddOne}>+1</button>
				<button onClick={props.onAddTwo}>+2</button>
			</div>

			<div className="flex-container">
            	<button onClick={props.onClearAll}>Clear History & Results</button>
            </div>
		</div>
	);
}

export default MainContent;

