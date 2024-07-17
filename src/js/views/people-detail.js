import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const PeopleDetail = () => {
	const { store, actions } = useContext(Context);
	const { uid } = useParams();
	const [personDetails, setPersonDetails] = useState(null);

	const imgUrl = (uid) => {
		return `https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`
	}

	console.log(personDetails)

	useEffect(() => {
		const fetchPersonDetails = async () => {
			const details = await actions.getPersonDetails(uid);
			setPersonDetails(details);
		};

		fetchPersonDetails();
	}, [uid]);

	const getImageUrl = (name) => {
		const formattedName = name.toLowerCase().replace(/\s+/g, '-');
		return `/images/people/${formattedName}.jpg`;
	};

	return (
		<div className="container border border-warning rounded p-0 bg-warning" style={{ minHeight: "400px" }}>
			{personDetails ? (
				<div className="d-flex align-items-center">
					<div className="d-flex w-100 h-100 align-items-center">
						<img src={imgUrl(uid)} onError={(e) => e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"}
							style={{ objectFit: "cover", maxHeight: "80vh" }}
							alt={personDetails.name}
							className="img-fluid w-100 h-100" />
					</div>
					<div className="w-100 h-100 bg-warning d-flex flex-column justify-content-center text-center">
						<h2 className="display-3">{personDetails.name}</h2>
						<p className="display-6">Birth year: {personDetails.birth_year}</p>
						<p className="display-6">Height: {personDetails.height}</p>
						<p className="display-6">Eye color: {personDetails.eye_color}</p>
					</div>
				</div>

			) : (
				<div className="d-flex mx-auto w-100 h-100 justify-content-center align-items-center">
					<p className="display-2">Loading data...</p></div>
			)}
		</div>
	);
}
