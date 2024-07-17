import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const PlanetDetail = () => {
	const { store, actions } = useContext(Context);
	const { uid } = useParams();
	const [planetDetails, setPlanetDetails] = useState(null);

	const imgUrl = (uid) => {
		return `https://starwars-visualguide.com/assets/img/planets/${uid}.jpg`
	}

	console.log(planetDetails)

	useEffect(() => {
		const fetchPlanetDetails = async () => {
			const details = await actions.getPlanetDetails(uid);
			setPlanetDetails(details);
		};

		fetchPlanetDetails();
	}, [uid]);

	useEffect(() => {
		actions.getPlanets();
	}, []);

	const getImageUrl = (name) => {
		const formattedName = name.toLowerCase().replace(/\s+/g, '-');
		return `/images/planet/${formattedName}.jpg`;
	};

	return (
		<div className="container border border-warning rounded p-0 bg-warning" style={{ minHeight: "400px" }}>
			{planetDetails ? (
				<div className="d-flex align-items-center">
					<div className="d-flex w-100 h-100 align-items-center">
						<img src={imgUrl(uid)} onError={(e) => e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"}
							style={{ aspectRatio: "1/1", objectFit: "cover" }}
							alt={planetDetails.name}
							className="img-fluid w-100 h-100" />
					</div>
					<div className=" w-100 h-100 bg-warning d-flex flex-column justify-content-center text-center">
						<h2 className="display-3">{planetDetails.name}</h2>
						<p className="display-6">Climate: {planetDetails.climate}</p>
						<p className="display-6">Terrain: {planetDetails.terrain}</p>
					</div>
				</div>

			) : (
				<div className="d-flex mx-auto w-100 h-100 justify-content-center align-items-center">
					<p className="display-2">Loading data...</p></div>
			)}
		</div>
	);
}
