import axios from 'axios';
// import { nanoid } from 'nanoid';

export const state = {
	trip: {
		// id: 0,
		destination: '',
		pic: {},
		weather: [],
		date: {},
	},
	savedTrip: [],
};

// Send data to server to make API requests
export const sendData = async (url = '', input = {}) => {
	const res = await axios.post(url, input, { withCredentials: true });
	try {
		const { data } = res;
		// state.trip.id = nanoid();
		state.trip.destination = data.destination;
		state.trip.pic = {
			url: data.pic.webformatURL,
			alt: data.pic.tags,
		};
		state.trip.weather = data.weather.map(item => {
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