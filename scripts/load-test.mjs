const fireRequest = async () => {
	return await fetch(
		"https://main--grand-faloodeh-09a237.netlify.app/timeout",
		{
			method: "GET",
			cache: "no-cache",
		}
	);
};

const fireRequests = async (amountOfRequests) => {
	return await Promise.all(
		Array(amountOfRequests)
			.fill(0)
			.map(async () => {
				const time = new Date().toISOString();
				const startTime = new Date().getTime();

				const response = await fireRequest();

				const timeTaken = new Date().getTime() - startTime;

				console.log(`[${time}] [GET /] [${timeTaken / 100}s] [${response.status} - ${response.statusText}]`);

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
