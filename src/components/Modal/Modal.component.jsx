import React from "react";

import ReactModal from "react-modal";
import ModalModule from "./components/ModalModule";


const Modal = ({
  innerModalModule,
}) => (
  <ReactModal
    isOpen={true}
  >
    <ModalModule />
  </ReactModal>
);


export default Modal;
