import Categories from "./index";
import { useRouter } from "next/router";

export default function CategoryPage() {
	const router = useRouter();
	const { address } = router.query;

	return <Categories address={address} />;
}
