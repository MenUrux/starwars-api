import React, { useContext } from 'react';
import { Context } from '../store/appContext';

export const FavoriteButton = ({ item, type }) => {
    const { store, actions } = useContext(Context);

    const isFavorite = store.favorites.some(favorite => favorite.uid === item.uid && favorite.type === type);

    const handleFavorite = () => {
        if (isFavorite) {
            actions.removeFavorite(item.uid, type);
        } else {
            actions.addFavorite(item, type);
        }
    };

    const buttonStyle = {
        zIndex: 9999,
        fontSize: "24px",
        textShadow: isFavorite ? '0px 0px 2px black' : ''
    };

    return (
        <button
            onClick={handleFavorite}
            className={`btn position-absolute top-0 end-0 text-danger display-2 ${isFavorite ? 'text-white' : ''}`}
            style={buttonStyle}
        >
            <i className={isFavorite ? 'fas fa-heart' : 'far fa-heart'}></i>
        </button>
    );
};
