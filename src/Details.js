import React from "react";

function Details({
	dog: { name, breed_group, life_span, height, temperament, weight, bred_for }
}) {
	//  <div class="ui items">
	// 			<div class="item">
	// 				<div class="image">
	// 					<img src="/images/wireframe/image.png" />
	// 					{/* <img src={url} alt="doc pic" /> */}
	// 				</div>
	// 				<div class="content">
	// 					<a class="header">{name}</a>
	// 					<div class="meta">
	// 						<span>Breed Group</span>
	// 					</div>
	// 					<div class="description">
	// 						<p>{breed_group}</p>
	// 					</div>
	// 					<div class="extra">{breed_group} Additional Details</div>
	// 				</div>
	// 			</div>
	// 			<div class="item">
	// 				<div class="image">
	// 					<img src="/images/wireframe/image.png" />
	// 				</div>
	// 				<div class="content">
	// 					<a class="header">Header</a>
	// 					<div class="meta">
	// 						<span>Description</span>
	// 					</div>
	// 					<div class="description">
	// 						<p></p>
	// 					</div>
	// 					<div class="extra">Additional Details</div>
	// 				</div>
	// 			</div>
	// 		</div>
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
