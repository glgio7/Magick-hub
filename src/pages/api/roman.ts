import { NextApiRequest, NextApiResponse } from "next";

const data = [
	{
		title: "Mitologia Romana",
		overview: [],
		address: "roman",
	},
	{
		name: "jupiter",
		image_path: "/assets/roman/jupiter.jpg",
		overview: [],
	},
	{
		name: "apolo",
		image_path: "/assets/roman/apolo.jpg",
		overview: [],
	},
	{
		name: "ceres",
		image_path: "/assets/roman/ceres.jpg",
		overview: [],
	},
	{
		name: "diana",
		image_path: "/assets/roman/diana.jpg",
		overview: [],
	},
	{
		name: "marte",
		image_path: "/assets/roman/marte.jpg",
		overview: [],
	},
	{
		name: "juno",
		image_path: "/assets/roman/juno.jpg",
		overview: [],
	},
	{
		name: "mercurio",
		image_path: "/assets/roman/mercurio.jpg",
		overview: [],
	},
	{
		name: "netuno",
		image_path: "/assets/roman/netuno.jpg",
		overview: [],
	},
	{
		name: "venus",
		image_path: "/assets/roman/venus.jpg",
		overview: [],
	},
	{
		name: "plutao",
		image_path: "/assets/roman/plutao.jpg",
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
