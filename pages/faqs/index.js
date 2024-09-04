import { useQuery, gql } from "@apollo/client";
import Image from "next/image";
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

import { HeroImageMedium } from "../../components/UI/Heros/HeroImageMedium";

import HeroImg from "../../public/images/bckg/hero.jpg";
import IconChevronDown from "../../components/SVG/IconChevronDown";

export default function Component() {
	const { data } = useQuery(Component.query, {
		variables: Component.variables(),
	});

	const primaryMenu = data?.headerMenuItems?.nodes ?? [];
	const footerMenu = data?.footerMenuItems?.nodes ?? [];

	const defaultContent =
		"Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary popular belief. There are many variations of passages of Lorem Ipsum available, but the majority randomised.";

	return (
		<>
			<Header title="" description="" menuItems={primaryMenu} />
			<Main>
				<HeroImageMedium title="Cada pregunta respondida" />
				{/* TODO */}
				<section className="sectionAcordionTODO">
					<div className="container">
						<div className="sectionAcordionTODO__grid">
							<div></div>
							<div className="sectionAcordionTODO__img">
								<Image
									layout="fill"
									src={HeroImg}
									width={1920}
									height={1253}
									quality={100}
									alt=""
								/>
							</div>
						</div>
					</div>
				</section>
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
