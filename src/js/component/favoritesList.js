import React, { useContext } from 'react';
import { Context } from '../store/appContext';

const FavoritesList = () => {
    const { store } = useContext(Context);
    return (
        <div className='text-warning'>
            <h2>Favorites</h2>
            <ul >
                {store.favorites.map((favorite, index) => (
                    <li key={index}>{favorite.name} </li>
                ))}
            </ul>
        </div>
    );
};

export default FavoritesList;
