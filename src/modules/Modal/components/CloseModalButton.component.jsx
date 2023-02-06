import React from "react";
import { useDispatch } from "react-redux";

import { toggleModal } from "slices/modal.slice";

import { StyledCloseModalButton } from "./styles/CloseModalButton.styles";

import { CrossIcon } from "evergreen-ui";

const CloseModalButton = () => {
  const dispatch = useDispatch();

  const handleClick = () => dispatch(toggleModal());

  return (
    <StyledCloseModalButton onClick={handleClick}>
      <CrossIcon size={18} />
    </StyledCloseModalButton>
  );
}

export default CloseModalButton;
