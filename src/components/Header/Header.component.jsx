import React from "react";
import { Link } from "gatsby";

import Logo from "global/assets/images/logo";

import { HeaderWrapper } from './styles/Header.styles';
import { routes } from "constants/routeIds";


const Header = () => (
  <HeaderWrapper>
    <Link to={routes.LANDING}>
      <Logo />
    </Link>
  </HeaderWrapper>
);


export default Header;
