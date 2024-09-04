import React from "react";
import Image from "next/image";

import className from "classnames/bind";
import styles from "./Gallery.module.scss";
let cx = className.bind(styles);

import Slide1 from "/public/images/posts/slide-1.png";
import Slide2 from "/public/images/bckg/hero.jpg";

const gallery = [
	{
		image: Slide1,
		gridColumn: 2,
	},
	{
		image: Slide1,
		gridColumn: 2,
	},
	{
		image: Slide1,
		gridColumn: 2,
	},
	{
		image: Slide2,
		gridColumn: 3,
	},
	{
		image: Slide2,
		gridColumn: 3,
	},
	{
		image: Slide1,
		gridColumn: 2,
	},
	{
		image: Slide1,
		gridColumn: 2,
	},
	{
		image: Slide1,
		gridColumn: 2,
	},
	{
		image: Slide2,
		gridColumn: 6,
	},
	{
		image: Slide1,
		gridColumn: 2,
	},
	{
		image: Slide1,
		gridColumn: 2,
	},
	{
		image: Slide1,
		gridColumn: 2,
	},
	{
		image: Slide1,
		gridColumn: 2,
	},
	{
		image: Slide1,
		gridColumn: 2,
	},
	{
		image: Slide1,
		gridColumn: 2,
	},
];

const Gallery = () => {
	return (
		<section className="Gallery">
			<div className={cx(["conmponent"])}>
				<div className="container">
					<h2 className="heading--44">Galeria</h2>
					<span className="space space--20"></span>
					<div className={cx(["grid"])}>
						{gallery.map((item, index) => (
							<div
								key={index}
								className={cx(["img", `grid-column-${item.gridColumn}`])}
							>
								<Image layout="fill" src={item.image} alt="Gallery" />
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Gallery;
