import localFont from "next/font/local";

const Bilo = localFont({
	src: [
		{
			path: "./fonts/Bilo.woff2",
			weight: "400",
		},
		{
			path: "./fonts/Bilo-Bold.woff2",
			weight: "700",
		},
	],
});

export { Bilo };
