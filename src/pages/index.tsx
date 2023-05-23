import { InferGetServerSidePropsType } from "next";

export function getServerSideProps() {
	return {
		props: {
			randomNumber: Math.random(),
		},
	};
}

export default function Home({
	randomNumber,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
	return <div>{randomNumber}</div>;
}
