import React from "react";

function Details({
	dog: { name, breed_group, life_span, height, temperament, weight, bred_for }
}) {
	return (
		<div className="details">
			<div className="inner">
				<li>
					<strong>Name:</strong> {name}
				</li>
				<li>
					<strong>Breed Group:</strong> {breed_group}
				</li>
				<li>
					<strong>Life Span:</strong> {life_span}
				</li>
				<li>
					<strong>Height:</strong> {height.imperial}inches
				</li>
				<li>
					<strong>Weight:</strong> {weight.imperial}lbs
				</li>
				<li>
					<strong>Temperament:</strong> {temperament}
				</li>
			</div>
		</div>
	);
}

export default Details;
