import React from "react";
import Image from "next/image";
import Link from "next/link";

import className from "classnames/bind";
import styles from "./BannerTextCta.module.scss";
let cx = className.bind(styles);

import Slide1 from "/public/images/bckg/gastronomia.webp";

const BannerTextCta = () => {
	return (
		<section className="BannerTextCta">
			<div className={cx("component")}>
				<div className="container">
					<div className={cx("bckg")}>
						<Image
							layout="fill"
							className={cx("img")}
							src={Slide1}
							width={1248}
							height={298}
							quality={100}
							alt=""
						/>
						<div className={cx("copy")}>
							<h2 className="heading--44 color--white">
								Reserva Tu Escapada de Lujo en Casa Selvaggio Hoy Mismo
							</h2>
							<Link className="button button--white" href="/">
								WhatsApp
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default BannerTextCta;
