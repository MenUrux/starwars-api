import React from "react";
import { Link } from "react-router-dom";
import FavoritesList from "./FavoritesList";

export const Navbar = () => {
	return (
		<nav className="navbar bg-transparent bg-dark mb-3 justify-content-around">
			<Link to="/">
				<span className="navbar-brand "><img src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Star_wars2.svg" alt=""
					style={{
						height: "6rem",
						filter: "drop-shadow(0px 0px 5px rgba(166, 166, 0, 1)",
						animation: "pulse 2s ease-in-out infinite",
					}} /></span>
			</Link>
			<div className="ml-auto">
				<FavoritesList />
			</div>
		</nav>
	);
};
