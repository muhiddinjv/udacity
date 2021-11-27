// import axios from 'axios';
const { default: axios } = require("axios");
// import { nanoid } from 'nanoid';

export const state = {
	travel: {
		// id: 0,
		destination: '',
		pic: {},
		weather: [],
		date: {},
	},
	savedTrip: [],
};

// Send data to server to make API requests
export const getData = async (url = '', input = {}) => {
	const res = await axios.post(url, input, { withCredentials: true });
	try {
		const { data } = res;
		// state.travel.id = nanoid();
		state.travel.destination = data.destination;
		state.travel.pic = {
			url: data.pic.webformatURL,
			alt: data.pic.tags,
		};
		state.travel.weather = data.weather.map(item => {
			return {
				date: item.datetime,
				icon: item.weather.icon,
				alt: item.weather.description,
				high: item.max_temp,
				low: item.min_temp,
				rain: item.pop,
			};
		});
	} catch (err) {
		throw err;
	}
};