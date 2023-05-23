import { wait } from "./utils/wait.mjs";

const fireRequest = async () => {
	return await fetch(
		"https://main--grand-faloodeh-09a237.netlify.app",
		{
			method: "GET",
			cache: "no-cache",
		}
	);
};

const run = async () => {
	const time = new Date().toISOString();
	const startTime = new Date().getTime();

	const response = await fireRequest();

	const timeTaken = new Date().getTime() - startTime;

	console.log(`[${time}] [GET /] [${(timeTaken / 100)}s] [${response.status} - ${response.statusText}]`);

	await wait(250);

	await run();
};

(async () => {
	console.log("=== Starting ping for home-page ===");

	await run();
})();
