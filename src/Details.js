import React from "react";

function Details({
	dog: { name, breed_group, life_span, height, temperament, weight, bred_for }
}) {
	return (
		<>
			<li className="item">
				<strong>Name:</strong>
				<h2>{name}</h2>
			</li>

			<li className="item">
				<strong>Breed Group:</strong>{" "}
				{breed_group ? breed_group : "no breed group found"}
			</li>
			<li className="item">
				<strong>Life Span:</strong> {life_span}
			</li>
			<li className="item">
				<strong>Height:</strong> {height.imperial}inches
			</li>
			<li className="item">
				<strong>Weight:</strong> {weight.imperial}lbs
			</li>
			<li className="item">
				<strong>Temperament:</strong> {temperament}
			</li>
		</>
	);
}

export default Details;
