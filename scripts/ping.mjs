import { wait } from "./utils/wait.mjs";
import { debugRequest } from "./utils/debugRequest.mjs";

const fireRequest = async () => {
	return await fetch("https://main--grand-faloodeh-09a237.netlify.app", {
		method: "GET",
		cache: "no-cache",
	});
};

const run = async () => {
	await debugRequest(fireRequest);

	await wait(250);

	await run();
};

(async () => {
	console.log("=== Starting ping for home-page ===");

	await run();
})();
