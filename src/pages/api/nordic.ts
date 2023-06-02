import { NextApiRequest, NextApiResponse } from "next";

const data = [
	{
		name: "Mitologia Nórdica",
		overview: [],
		address: "nordic",
	},
	{
		name: "Odin",
		image_path: "/assets/nordic/deus-odin.webp",
		overview: "",
	},
	{
		name: "Loki",
		image_path: "/assets/nordic/deus-loki.webp",
		overview: "",
	},
	{
		name: "Frigg",
		image_path: "/assets/nordic/deusa-frigg.webp",
		overview: "",
	},
	{
		name: "Hel",
		image_path: "/assets/nordic/deusa-hel.webp",
		overview: "",
	},
	{
		name: "Thor",
		image_path: "/assets/nordic/deus-thor.webp",
		overview: "",
	},
	{
		name: "Bragi",
		image_path: "/assets/nordic/deus-bragi.webp",
		overview: "",
	},
	{
		name: "Tyr",
		image_path: "/assets/nordic/deus-tyr.webp",
		overview: "",
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
