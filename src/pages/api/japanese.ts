import { NextApiRequest, NextApiResponse } from "next";

const data = [
	{
		name: "Mitologia Japonesa",
		overview: [],
		address: "japanese",
	},
	{
		name: "Amaterasu",
		image_path: "/assets/japanese/amaterasu.webp",
		overview: [],
	},
	{
		name: "Fujin",
		image_path: "/assets/japanese/fujin.webp",
		overview: [],
	},
	{
		name: "Inari",
		image_path: "/assets/japanese/inari.webp",
		overview: [],
	},
	{
		name: "Kaijin",
		image_path: "/assets/japanese/kaijin.webp",
		overview: [],
	},
	{
		name: "Shinigami",
		image_path: "/assets/japanese/shinigami.webp",
		overview: [],
	},
	{
		name: "Susanowo",
		image_path: "/assets/japanese/susanowo.webp",
		overview: [],
	},
	{
		name: "Tsuki-Yomi",
		image_path: "/assets/japanese/tsukiyomi.webp",
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
