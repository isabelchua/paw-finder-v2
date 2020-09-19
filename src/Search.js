import React, { useEffect, useState } from "react";
import Gallery from "./Gallery";
import axios from "axios";
import Details from "./Details";

function Search() {
	const [query, setQuery] = useState("");
	const [dogs, setDogs] = useState([]);
	const [pics, setPics] = useState([]);
	const [list, setList] = useState([]);
	//const [listImages, setListImages] = useState([]);
	//const DOG_API = process.env.API_KEY;

	//console.log(DOG_API);

	// const onSubmit = async e => {
	// 	e.preventDefault();
	// 	//const url = `https://dog.ceo/api/breed/${query}/images/random/10`;
	// 	const url = `https://dog.ceo/api/breed/akita/images/random/9`;
	// 	try {
	// 		const res = await fetch(url);
	// 		const data = await res.json();
	// 		//console.log(data);

	// 		setPics(data.message);
	// 		// console.log(data);

	// 		//console.log(setDogs);
	// 		//setDogs(data.results);
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };

	useEffect(() => {
		getList();
		//getListImages();
		// eslint-disable-next-line
	}, []);

	const getList = async () => {
		try {
			//const list = `https://api.thedogapi.com/v1/breeds`;
			const list = `https://dog.ceo/api/breeds/list/all`;
			const res_list = await fetch(list);
			const data_list = await res_list.json();
			//console.log(data_list);
			//setList(data_list);

			let output = [];
			let dogs = data_list.message;
			for (let key in dogs) {
				if (dogs[key].length) {
					dogs[key].forEach(dog => {
						output.push(`${dog} ${key}`);

						//console.log(output);
					});
				} else {
					output.push(key);
				}
			}
			console.log("output " + output);
			setList(output);
		} catch (error) {
			console.log(error);
		}
	};

	// const getListImages = async () => {
	// 	try {
	// 		const list = `https://dog.ceo/api/breeds/list/all`;
	// 		const res_list = await fetch(list);
	// 		const data_list = await res_list.json();
	// 		setList(data_list);
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };

	const onSubmit = async e => {
		e.preventDefault();
		console.log(query);

		const config = {
			method: "get",
			url: `https://api.thedogapi.com/v1/breeds/search?q=${query}`,
			headers: {
				"x-api-key": "86170d64-e812-4388-9a95-270019e80f9f"
			}
		};
		try {
			let res_info = await axios(config);

			const url = `https://dog.ceo/api/breed/${query.toLowerCase()}/images/random/9`;
			const res = await fetch(url);
			const data2 = await res.json();

			const bark = JSON.parse(res_info.request.response);
			setDogs(bark);

			console.log(data2.code);
			if (data2.code === 404) {
				setPics(null);
				return;
			}
			setPics(data2.message);
		} catch (error) {
			console.log(error);
		}

		//console.log(data);

		///console.log(res.request.response);
		//setDogs(res.request.response);

		//const {res.request.response} = bark;
		//console.log(Object.entries(bark));
		//console.log(bark[0]);
		//const bark2 = Object.entries(bark);
		//console.log(bark);
		//console.log(bark2[0]);

		//console.log(bark2[1][1]);

		// const data = await res.request.json();
		// console.log(data);
		// console.log(res.request.response);
		// setDogs(res.request.response);
		//xhr.open("GET", "https://api.thedogapi.com/v1/breeds/search?q=husky");
		// xhr.setRequestHeader("x-api-key", "86170d64-e812-4388-9a95-270019e80f9f");

		// xhr.send(data);
	};

	return (
		<>
			<form onSubmit={onSubmit} className="form">
				{/* <input
					type="text"
					name=""
					id=""
					value={query}
					onChange={e => setQuery(e.target.value)}
					placeholder="Search for dog breed"
				/> */}

				{/* <select
					onSelect={onSubmit}
					value={query}
					onChange={e => setQuery(e.target.value)}
				>
					<option>dog breed</option>
					{list.map(li => (
						<option key={li.name}>{li.name}</option>
					))}
				</select> */}

				<select
					onSelect={onSubmit}
					value={query}
					onChange={e => setQuery(e.target.value)}
				>
					<option>dog breed</option>
					{list.map(li => (
						<option key={li}>{li}</option>
					))}
				</select>

				<button className="button">FETCH!</button>
			</form>
			<div className="gallery">
				{dogs && dogs?.map((dog, id) => <Details dog={dog} key={id} />)}

				{/* {pics ? pics?.map((dog, id) => <Gallery dog={dog} key={id} />) : ""} */}
				{/* <h1>Gallery</h1> */}

				{pics ? (
					<>
						{pics?.map((dog, id) => (
							<Gallery dog={dog} key={id} />
						))}
					</>
				) : (
					<h3 className="warning">Sorry, no available images :( </h3>
				)}
			</div>
		</>
	);
}

export default Search;
