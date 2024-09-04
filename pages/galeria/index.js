import { useQuery, gql } from '@apollo/client';
import * as MENUS from '../../constants/menus';
import { BlogInfoFragment } from '../../fragments/GeneralSettings';
import {
  Header,
  Footer,
  Main,
  Container,
  NavigationMenu,
  Hero,
  SEO,
} from '../../components';

import { HeroCarusel } from "../../components/UI/Heros/HeroCarusel";
import { Gallery } from "../../components/UI/Galleries/Gallery";

import Slide1 from "/public/images/posts/slide-2.png";

export default function Component() {
  const { data } = useQuery(Component.query, {
    variables: Component.variables(),
  });

  
  const primaryMenu = data?.headerMenuItems?.nodes ?? [];
  const footerMenu = data?.footerMenuItems?.nodes ?? [];

  return (
    <>
      <Header
        title=''
        description=''
        menuItems={primaryMenu}
      />
      <Main>
        <HeroCarusel/>
        <Gallery/>
      </Main>
      <Footer title='' menuItems={footerMenu} />
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
