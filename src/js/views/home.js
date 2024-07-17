import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.css";
import { PeopleContainer } from "../component/peopleContainer";
import { PlanetContainer } from "../component/planetContainer";




export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getVehicles();
	}, []);

	return (
		<div className="d-flex flex-column gap-4">

			<PeopleContainer />
			<PlanetContainer />

		</div>
	);
}
