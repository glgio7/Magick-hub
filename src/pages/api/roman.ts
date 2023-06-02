import { NextApiRequest, NextApiResponse } from "next";

const data = [
	{
		name: "Mitologia Romana",
		overview: [],
		address: "roman",
	},
	{
		name: "jupiter",
		image_path: "/assets/roman/jupiter.webp",
		overview: [],
	},
	{
		name: "apolo",
		image_path: "/assets/roman/apolo.webp",
		overview: [],
	},
	{
		name: "ceres",
		image_path: "/assets/roman/ceres.webp",
		overview: [],
	},
	{
		name: "diana",
		image_path: "/assets/roman/diana.webp",
		overview: [],
	},
	{
		name: "marte",
		image_path: "/assets/roman/marte.webp",
		overview: [],
	},
	{
		name: "juno",
		image_path: "/assets/roman/juno.webp",
		overview: [],
	},
	{
		name: "mercurio",
		image_path: "/assets/roman/mercurio.webp",
		overview: [],
	},
	{
		name: "netuno",
		image_path: "/assets/roman/netuno.webp",
		overview: [],
	},
	{
		name: "venus",
		image_path: "/assets/roman/venus.webp",
		overview: [],
	},
	{
		name: "plutao",
		image_path: "/assets/roman/plutao.webp",
		overview: [],
	},
];

const list = (req: NextApiRequest, res: NextApiResponse) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	);
	res.status(200).json(data);
};

export default list;
