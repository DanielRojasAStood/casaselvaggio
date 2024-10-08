import React from "react";
import Image from "next/image";
import Link from "next/link";

import className from "classnames/bind";
import styles from "./CardsBigSmall.module.scss";
let cx = className.bind(styles);

import ImageLeft from "/public/images/posts/nuestras-habitaciones.webp";
import ImageRight from "/public/images/posts/nuestras-habitaciones-2.webp";

const CardsBigSmall = () => {
	return (
		<section className="CardsBigSmall">
			<div className={cx("component")}>
				<div className="container">
					<div className={cx(["title"])}>
						<h2 className={cx(["heading--44", "color--primary"])}>
							Nuestras Habitaciones
						</h2>
						<p className="heading--16 color--gray">
							Disfruta de la comodidad y el lujo en nuestras habitaciones
							diseñadas para ofrecerte una estancia inolvidable.
						</p>
					</div>
					<div className={cx("grid")}>
						<div className={cx("card")}>
							<Image src={ImageLeft} quality={100} alt="Imagen" />
							<div className={cx(["copy"])}>
								<h3 className={cx(["heading", "heading--24", "color--white"])}>
									Casa Selvaggio Habitación 01
								</h3>
								<Link href="#" className="button button--white">
									Reservar
								</Link>
							</div>
						</div>
						<div className={cx("card")}>
							<Image src={ImageRight} quality={100} alt="Imagen" />
							<div className={cx(["copy"])}>
								<h3 className={cx(["heading", "heading--24", "color--white"])}>
									Casa Selvaggio Habitación 01
								</h3>
								<Link href="/" className="button button--white">
									Reservar
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CardsBigSmall;
