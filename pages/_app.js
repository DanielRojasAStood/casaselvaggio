import "../faust.config";
import React from "react";
import { useRouter } from "next/router";
import { FaustProvider } from "@faustwp/core";
import "@faustwp/core/dist/css/toolbar.css";
import "../styles/global.scss";

export default function MyApp({ Component, pageProps, montserrat }) {
	const router = useRouter();

  console.log(montserrat)

	return (
		<FaustProvider pageProps={pageProps}>
			<div className="">
				<Component {...pageProps} key={router.asPath} />
			</div>
		</FaustProvider>
	);
}
