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
import { TextImage } from "../../components/UI/TextImages";
import { CardsGridTwo } from "../../components/UI/Cards/CardsGridTwo";
import { CardsGridFourCarusel } from "../../components/UI/Cards/CardsGridFourCarusel";

import Slide1 from "/public/images/posts/slide-2.png";

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
				<TextImage
					title="Por que Casa <br> Selvaggio"
					text="En Casa Selvaggio, combinamos el lujo con la sostenibilidad para ofrecer una experiencia única. Nuestro hotel está diseñado para brindar comodidad y sofisticación con el menor impacto ambiental. En Casa Selvaggio, combinamos el lujo con la sostenibilidad para ofrecer una experiencia única. Nuestro hotel está diseñado para brindar comodidad y sofisticación con el menor impacto ambiental.  En Casa Selvaggio, combinamos el lujo con la sostenibilidad para ofrecer una experiencia única. Nuestro hotel está diseñado para brindar comodidad y sofisticación con el menor impacto ambiental. En Casa Selvaggio, combinamos el lujo con la sostenibilidad para ofrecer una experiencia única. Nuestro hotel está diseñado para brindar comodidad y sofisticación con el menor impacto ambiental."
					imageSrc={Slide1}
					className="row-mobile"
					listItems=""
				/>
				<CardsGridTwo />
				<CardsGridFourCarusel />
				<TextImage
					title="Historia Casa <br> Selvaggio"
					text="En Casa Selvaggio, combinamos el lujo con la sostenibilidad para ofrecer una experiencia única. Nuestro hotel está diseñado para brindar comodidad y sofisticación con el menor impacto ambiental. En Casa Selvaggio, combinamos el lujo con la sostenibilidad para ofrecer una experiencia única. Nuestro hotel está diseñado para brindar comodidad y sofisticación con el menor impacto ambiental.  En Casa Selvaggio, combinamos el lujo con la sostenibilidad para ofrecer una experiencia única. Nuestro hotel está diseñado para brindar comodidad y sofisticación con el menor impacto ambiental. En Casa Selvaggio, combinamos el lujo con la sostenibilidad para ofrecer una experiencia única. Nuestro hotel está diseñado para brindar comodidad y sofisticación con el menor impacto ambiental."
					imageSrc={Slide1}
					className="row-reverse"
					listItems=""
				/>
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
