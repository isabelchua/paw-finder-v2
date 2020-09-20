import React from "react";

function Front({ pic }) {
	return (
		<div>
			<img src={pic.url} alt="doc pic" />
		</div>
	);
}

export default Front;
