const fireRequest = async () => {
	const response = await fetch(
		"https://main--grand-faloodeh-09a237.netlify.app/timeout",
		{
			method: "GET",
			cache: "no-cache",
		}
	);

	return response.statusText;
};

const fireRequests = async (amountOfRequests) => {
	return await Promise.all(
		Array(amountOfRequests)
			.fill(0)
			.map(async () => {
				const time = new Date().toISOString();

				const response = await fireRequest();

				console.log(`[${time}] [GET /timeout] ${response}`);

				return response;
			})
	);
};

const run = async () => {
	await fireRequests(500);

	await run();
};

(async () => {
	console.log("=== Starting load test ===");

	await run();
})();
