import React from "react";
import { Link } from "gatsby";

import Logo from "global/assets/images/logo";

import { HeaderWrapper } from './styles/Header.styles';
import { ROUTES } from "constants/routes";


const Header = () => (
  <HeaderWrapper>
    <Link to={ROUTES.LANDING}>
      <Logo />
    </Link>
  </HeaderWrapper>
);


export default Header;
