import { wait } from "./wait";

export const getDummyData = async () => {
	await wait(30_000);

	return "very slow";
};
