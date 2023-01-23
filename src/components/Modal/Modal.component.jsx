import React from "react";

import ReactModal from "react-modal";

import ModalModule from "./components/ModalModule";
import { useSelector, useDispatch } from "react-redux";
import { toggleModal } from "slices/modal.slice";

import { isModalOpenSelector } from "selectors/modal.selectors";


const Modal = () => {
  const dispatch = useDispatch();

  const onToggleModal = () => dispatch(toggleModal());
  const isModalOpen = useSelector(isModalOpenSelector);

  return (
    <ReactModal
      isOpen={isModalOpen}
      onRequestClose={onToggleModal}
    >
      <ModalModule />
    </ReactModal>
  );
};


export default Modal;
