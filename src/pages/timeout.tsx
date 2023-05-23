import { InferGetServerSidePropsType } from "next";
import { getDummyData } from "@/utils/getDummyData";

export async function getServerSideProps() {
	const dummyData = await getDummyData();

	return {
		props: {
			dummyData,
		},
	};
}

export default function Timeout({
	dummyData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
	return <div>dummyData: {dummyData}</div>;
}
