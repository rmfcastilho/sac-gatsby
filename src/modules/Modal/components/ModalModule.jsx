import React from "react";

import { modalTextContent } from "modules/Modal/constants/ModalTextContent";
import { modalTypes } from "modules/Modal/constants/ModalTypes";


const ModalModule = ({ contentType }) => (
  <div>
    {modalTextContent[contentType].header}

    {modalTextContent[contentType].textualClarification}

    {modalTextContent[contentType].type === modalTypes.DELAYED_RESOURCE
      ? 'Delayed Button Here'
      : 'Nothing to show'
    }
  </div>
)


export default ModalModule;
