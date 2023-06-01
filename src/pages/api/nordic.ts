import { NextApiRequest, NextApiResponse } from "next";

const data = [
	{
		title: "Mitologia Nórdica",
		overview: [],
		address: "nordic",
	},
	{
		name: "Odin",
		image_path: "/assets/nordic/deus-odin.jpg",
		overview: "",
	},
	{
		name: "Loki",
		image_path: "/assets/nordic/deus-loki.jpg",
		overview: "",
	},
	{
		name: "Frigg",
		image_path: "/assets/nordic/deusa-frigg.jpg",
		overview: "",
	},
	{
		name: "Hel",
		image_path: "/assets/nordic/deusa-hel.jpg",
		overview: "",
	},
	{
		name: "Thor",
		image_path: "/assets/nordic/deus-thor.jpg",
		overview: "",
	},
	{
		name: "Bragi",
		image_path: "/assets/nordic/deus-bragi.jpg",
		overview: "",
	},
	{
		name: "Tyr",
		image_path: "/assets/nordic/deus-tyr.jpg",
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
