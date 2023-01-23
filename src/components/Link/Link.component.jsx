import React from 'react';

import { TextualLink, InnerLinkText } from "./styles/Link.styles";
import { ArrowLeftIcon } from 'evergreen-ui';


const Link = ({ link, children, isBackLink }) => (
  <TextualLink
    to={link}
  >
    {isBackLink && <ArrowLeftIcon size={16} />}
    <InnerLinkText>{children}</InnerLinkText>

  </TextualLink>
);


export default Link;
