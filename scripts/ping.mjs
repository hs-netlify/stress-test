import { wait } from "./utils/wait.mjs";

const fireRequest = async () => {
	const response = await fetch(
		"https://main--grand-faloodeh-09a237.netlify.app",
		{
			method: "GET",
			cache: "no-cache",
		}
	);

	return response.statusText;
};

const run = async () => {
	const time = new Date().toISOString();

	const response = await fireRequest();

	console.log(`[${time}] [GET /] ${response}`);

	await wait(250);

	await run();
};

(async () => {
	console.log("=== Starting ping for home-page ===");

	await run();
})();
