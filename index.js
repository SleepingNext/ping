const axios = require("axios");

async function ping() {
	const interval = 1000; // Configure this variable if needed.

	setInterval(async function () {
		const url = (process.argv[2]) ? process.argv[2] : "https://www.google.com";
		const response = await axios.get(url); // Configure the method if needed.
		console.log(response.data);
	}, interval);
}

ping().then();