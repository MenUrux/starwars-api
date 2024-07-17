import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { FavoriteButton } from './FavoriteButton';



export const PeopleContainer = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getPeople();
    }, []);

    const imgUrl = (uid) => {
        return `https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`
    }

    return (
        <div className="d-flex justify-content-center flex-column gap-4">
            <h2 className="text-center display-2 text-warning">People</h2>
            <div
                className="d-flex container-fluid gap-4 overflow-y-scroll"
                style={{ overflowY: "hidden", width: "90%" }}
            >
                {
                    store.people && store.people.length > 0 ? (
                        store.people.map((person, index) => (
                            <div className="d-flex flex-column w-auto border border-warning rounded position-relative z-0 " key={index}>
                                <FavoriteButton item={person} />
                                <Link className="overflow-hidden"
                                    to={`/people/${person.uid}`}>
                                    <img src={imgUrl(person.uid)} className="hover-effect "
                                        alt={person.name} />
                                    <h2 className="position-absolute p-4 bottom-0 w-100 text-white link-underline-opacity-0 mx-auto text-center user-select-none"
                                        style={{ textShadow: "0px 0px 12px black, 0px 0px 6px yellow" }}
                                    >{person.name}</h2>
                                </Link>
                            </div>
                        ))
                    ) : (
                        <p>Loading characters</p>
                    )
                }
            </div >
        </div>
    )
}