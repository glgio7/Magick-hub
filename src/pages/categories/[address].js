import Categories from "../../pages/categories";
import { useRouter } from "next/router";

export default function CategoryPage() {
	const router = useRouter();
	const { address } = router.query;

	return <Categories address={address} />;
}
