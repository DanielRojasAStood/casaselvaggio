import React from "react";
import Image from "next/image";
import Link from "next/link";

import { ListItem } from "../../ListItem";

import className from "classnames/bind";
import styles from "./TextImage.module.scss";
let cx = className.bind(styles);

const TextImage = ({ title, text, imageSrc, className, listItems }) => {
	return (
		<section className="">
			<div className={cx("component")}>
				<div className="container">
					<div className={cx(["grid", `${className}`])}>
						<div className={cx("content")}>
							<h2
								className="heading--44 color--primary"
								dangerouslySetInnerHTML={{ __html: title }}
							/>
							<p
								className="heading--16 color--gray"
								dangerouslySetInnerHTML={{ __html: text }}
							/>
							<div className={cx("listitems")}>
								{listItems &&
									listItems.length > 0 &&
									listItems.map((item, index) => (
										<div key={index}>
											<ListItem data={item} />
										</div>
									))}
							</div>
							<Link href="#">
								<a className="button button--primary">Reservar</a>
							</Link>
						</div>
						<div className={cx("img")}>
							<Image
								src={imageSrc}
								quality={100}
								alt=""
								fill
								sizes="100vw"
								style={{
									objectFit: "cover",
								}}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TextImage;
