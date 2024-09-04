import { useQuery, gql } from "@apollo/client";
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

import Slide1 from "/public/images/posts/slide-2.png";

export default function Component() {
	const { data } = useQuery(Component.query, {
		variables: Component.variables(),
	});

	const primaryMenu = data?.headerMenuItems?.nodes ?? [];
	const footerMenu = data?.footerMenuItems?.nodes ?? [];

	const listItems = [
		"Dato interes 01",
		"Dato interes 02",
		"Dato interes 03",
		"Dato interes 04",
	];

	return (
		<>
			<Header title="" description="" menuItems={primaryMenu} />
			<Main>
				<HeroCarusel />
				<TextImage
					title="Un Refugio de Lujo en la Naturaleza"
					text="En Casa Selvaggio, combinamos el lujo con la sostenibilidad para ofrecer una experiencia única. Nuestro hotel está diseñado para brindar comodidad y sofisticación con el menor impacto ambiental."
					imageSrc={Slide1}
					className="row"
					listItems={listItems}
				/>
				<TextImage
					title="Un Refugio de Lujo en la Naturaleza"
					text="En Casa Selvaggio, combinamos el lujo con la sostenibilidad para ofrecer una experiencia única. Nuestro hotel está diseñado para brindar comodidad y sofisticación con el menor impacto ambiental."
					imageSrc={Slide1}
					className="row-reverse"
					listItems={listItems}
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
