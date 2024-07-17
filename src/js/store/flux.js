const url = 'https://www.swapi.tech/api';

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			vehicles: [],
			favorites: [],
		},
		actions: {
			// Use getActions to call a function within a fuction
			getPeople: async () => {
				try {
					let response = await fetch(`${url}/people`)
					console.log(response);
					let data = await response.json();
					// console.log(data);
					setStore({ people: data.results })
					// console.log(data, store.people)
					return true;

				} catch (error) {
					console.log(error);
					return false;
				}
			},
			getPersonDetails: async (uid) => {
				try {
					const response = await fetch(`${url}/people/${uid}`);
					const data = await response.json();
					// console.log(data)
					return data.result.properties;
				} catch (error) {
					console.error(`Error fetching details for person ${uid}:`, error);
					return null;
				}
			},
			getPlanets: async () => {
				try {
					let response = await fetch(`${url}/planets`);
					console.log(response);
					let data = await response.json();
					console.log("Fetched planets:", data);
					setStore({ planets: data.results });
					return true;
				} catch (error) {
					console.log(error);
					return false;
				}
			},
			getPlanetDetails: async (uid) => {
				try {
					const response = await fetch(`${url}/planets/${uid}`);
					const data = await response.json();
					console.log("Fetched planet details:", data);
					return data.result.properties;
				} catch (error) {
					console.error(`Error fetching details for planet ${uid}:`, error);
					return null;
				}
			},
			getVehicles: async () => {
				try {
					let response = await fetch(`${url}/vehicles`)
					// console.log(response);
					let data = await response.json();
					// console.log(data);
					setStore({ vehicles: data.results })
					// console.log(data, store.people)
					return true;
				} catch (error) {
					console.log(error);
					return false;
				}
			},
			addFavorite: (item, type) => {
				const store = getStore();
				const newItem = { ...item, type };
				if (!store.favorites.find(favorite => favorite.uid === newItem.uid && favorite.type === newItem.type)) {
					setStore({ favorites: [...store.favorites, newItem] });
				}
			},
			removeFavorite: (uid, type) => {
				const store = getStore();
				setStore({ favorites: store.favorites.filter(favorite => favorite.uid !== uid || favorite.type !== type) });
			}
		}
	};
};

export default getState;
