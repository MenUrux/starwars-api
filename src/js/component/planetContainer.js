import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { FavoriteButton } from "./FavoriteButton";


export const PlanetContainer = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getPlanets();
    }, []);

    const imgUrl = (uid) => {
        return `https://starwars-visualguide.com/assets/img/planets/${uid}.jpg`
    }
    return (
        <div className="d-flex justify-content-center flex-column gap-4">
            <h2 className="text-center display-2 text-warning">Planets</h2>
            <div
                className="d-flex container-fluid gap-4 overflow-y-scroll"
                style={{ overflowY: "hidden", width: "90%" }}
            >
                {
                    store.planets && store.planets.length > 0 ? (
                        store.planets.map((planet, index) => (
                            <div className="d-flex flex-column w-auto border border-warning rounded position-relative z-0 " key={index}>
                                <FavoriteButton item={planet} type="planet" />
                                <Link className="overflow-hidden"
                                    to={`/planet/${planet.uid}`}>
                                    <img src={imgUrl(planet.uid)} onError={(e) => e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"} className="hover-effect overflow-hidden"
                                        style={{ height: "400px", width: "400px", objectFit: "cover", position: "40px" }}
                                        alt={planet.name} />
                                    <h2 className="position-absolute p-4 bottom-0 w-100 text-white link-underline-opacity-0 mx-auto text-center user-select-none"
                                        style={{ textShadow: "0px 0px 12px black, 0px 0px 6px yellow" }}
                                    >{planet.name}</h2>
                                </Link>

                            </div>
                        ))
                    ) : (
                        <p>Loading characters</p>
                    )
                }
            </div >
        </div >
    )
}