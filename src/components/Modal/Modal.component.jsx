import React from "react";

import ReactModal from "react-modal";

import ModalModule from "./components/ModalModule";
import { useSelector, useDispatch } from "react-redux";
import { toggleModal } from "slices/modal.slice";

import { isModalOpenSelector } from "selectors/modal.selectors";
import { getModalContentSelector } from "selectors/modal.selectors";

import { modalStyles } from "./styles/ReactModalStyles";


const Modal = () => {
  const dispatch = useDispatch();
  const module = useSelector(getModalContentSelector);

  const onToggleModal = () => dispatch(toggleModal());
  const isModalOpen = useSelector(isModalOpenSelector);

  return (
    <ReactModal
      isOpen={isModalOpen}
      onRequestClose={onToggleModal}
      style={modalStyles}
    >
      <ModalModule contentType={module} />
    </ReactModal>
  );
};


export default Modal;
