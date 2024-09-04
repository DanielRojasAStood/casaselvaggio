import { useQuery, gql } from "@apollo/client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import * as MENUS from "../../constants/menus";
import { BlogInfoFragment } from "../../fragments/GeneralSettings";
import {
	Header,
	Footer,
	Main,
	Container,
	NavigationMenu,
	Hero,
	SEO,
} from "../../components";

import { HeroCarusel } from "../../components/UI/Heros/HeroCarusel";
import { BannerTextCta } from "../../components/UI/Banners/BannerTextCta";
import { Card } from "../../components/UI/Cards/Card";
import { CardsMasonry } from "../../components/UI/Cards/CardsMasonry";

export default function Component() {
	const { data } = useQuery(Component.query, {
		variables: Component.variables(),
	});

	const primaryMenu = data?.headerMenuItems?.nodes ?? [];
	const footerMenu = data?.footerMenuItems?.nodes ?? [];

	var settings = {
		dots: false,
		arrows: false,
		touchMove: true,
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
		<>
			<Header title="" description="" menuItems={primaryMenu} />
			<Main>
				<HeroCarusel />
				{/* TODO */}
				<section className="CardTODO">
					<div className="container--slick">
						<div className="CardTODO__title">
							<h2 className="heading--44 color--primary">
								Experiencias más populares
							</h2>
							<div className="CardTODO__CTA">
								<button type="button" className="button button--primary">
									Tours Casa Selvaggio
								</button>
								<button type="button" className="button button--primary">
									Tours Casa Selvaggio
								</button>
								<button type="button" className="button button--primary">
									Tours Casa Selvaggio
								</button>
							</div>
						</div>
						<Slider {...settings}>
							<Card />
							<Card />
							<Card />
						</Slider>
					</div>
				</section>
				<CardsMasonry />
				<BannerTextCta />
			</Main>
			<Footer title="" menuItems={footerMenu} />
		</>
	);
}

Component.query = gql`
	${BlogInfoFragment}
	${NavigationMenu.fragments.entry}
	query GetPageData(
		$headerLocation: MenuLocationEnum
		$footerLocation: MenuLocationEnum
	) {
		generalSettings {
			...BlogInfoFragment
		}
		headerMenuItems: menuItems(where: { location: $headerLocation }) {
			nodes {
				...NavigationMenuItemFragment
			}
		}
		footerMenuItems: menuItems(where: { location: $footerLocation }) {
			nodes {
				...NavigationMenuItemFragment
			}
		}
	}
`;

Component.variables = () => {
	return {
		headerLocation: MENUS.PRIMARY_LOCATION,
		footerLocation: MENUS.FOOTER_LOCATION,
	};
};
