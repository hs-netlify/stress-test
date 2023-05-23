import { debugRequest } from "./utils/debugRequest.mjs";

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
			.map(async () => await debugRequest(fireRequest))
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
