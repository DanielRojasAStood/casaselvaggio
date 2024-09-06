import React from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import className from "classnames/bind";
import styles from "./CardsGrid.module.scss";
let cx = className.bind(styles);

import Slide1 from "/public/images/posts/slide-1.png";
import Slide2 from "/public/images/posts/slide-2.png";
import Slide3 from "/public/images/posts/slide-3.png";

const CardGrid = (props) => {
	var settings = {
		dots: false,
		arrows: false,
		touchMove: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					touchMove: true,
					infinite: true,
					centerMode: true,
					centerPadding: "20px",
				},
			},
			{
				breakpoint: 680,
				settings: {
					slidesToShow: 1,
					touchMove: true,
					infinite: true,
					centerMode: true,
					centerPadding: "20px",
				},
			},
		],
	};
	return (
		<section className="CardsGrid">
			<div className={cx(["component"])}>
				<div className="container">
					<div className={cx(["grid", props.class])}>
						<h2 className={cx(["heading", "heading--44", "color--primary"])}>
							Un Refugio de Lujo en la Naturaleza
						</h2>
						<p className="heading--16 color--gray">
							En Casa Selvaggio, combinamos el lujo con la sostenibilidad para
							ofrecer una experiencia única. Nuestro hotel está diseñado para
							brindar comodidad y sofisticación con el menor impacto ambiental.
						</p>
					</div>
				</div>
				<div className="container--slick">
					<Slider {...settings}>
						<div className={cx(["card"])}>
							<Image
								src={Slide1}
								quality={100}
							/>
							<div className={cx(["copy"])}>
								<h3 className="heading--24 color--white">Vista hotel 01</h3>
								<p className="heading--16 color--white">
									Lorem ipsum dolor sit amet, consectetur eiusmod tempor.
								</p>
							</div>
						</div>
						<div className={cx(["card"])}>
							<Image
								src={Slide1}
								quality={100}
							/>
							<div className={cx(["copy"])}>
								<h3 className="heading--24 color--white">Vista hotel 01</h3>
								<p className="heading--16 color--white">
									Lorem ipsum dolor sit amet, consectetur eiusmod tempor.
								</p>
							</div>
						</div>
						<div className={cx(["card"])}>
							<Image
								src={Slide1}
								quality={100}
							/>
							<div className={cx(["copy"])}>
								<h3 className="heading--24 color--white">Vista hotel 01</h3>
								<p className="heading--16 color--white">
									Lorem ipsum dolor sit amet, consectetur eiusmod tempor......
								</p>
							</div>
						</div>
					</Slider>
				</div>
			</div>
		</section>
	);
};

export default CardGrid;
