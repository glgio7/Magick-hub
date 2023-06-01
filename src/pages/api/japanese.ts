import { NextApiRequest, NextApiResponse } from "next";

const data = [
	{
		title: "Mitologia Japonesa",
		overview: [],
		address: "japanese",
	},
	{
		name: "Amaterasu",
		image_path: "/assets/japanese/amaterasu.jpg",
		overview: [],
	},
	{
		name: "Fujin",
		image_path: "/assets/japanese/fujin.jpg",
		overview: [],
	},
	{
		name: "Inari",
		image_path: "/assets/japanese/inari.jpg",
		overview: [],
	},
	{
		name: "Kaijin",
		image_path: "/assets/japanese/kaijin.jpg",
		overview: [],
	},
	{
		name: "Shinigami",
		image_path: "/assets/japanese/shinigami.jpg",
		overview: [],
	},
	{
		name: "Susanowo",
		image_path: "/assets/japanese/susanowo.jpg",
		overview: [],
	},
	{
		name: "Tsuki-Yomi",
		image_path: "/assets/japanese/tsukiyomi.jpg",
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
