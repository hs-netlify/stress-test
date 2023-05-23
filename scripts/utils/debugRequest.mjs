export const debugRequest = async (callback) => {
	const start = new Date();

	const response = await callback();

	const timeTaken = new Date().getTime() - start.getTime();

	console.log(
		`[${start.toISOString()}] [GET /] [${timeTaken / 100}s] [${
			response.status
		} - ${response.statusText}]`
	);

	return response;
};
