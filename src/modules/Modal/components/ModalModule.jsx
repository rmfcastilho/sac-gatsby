import React from "react";

import { modalTextContent } from "modules/Modal/constants/ModalTextContent";
import { modalTypes } from "modules/Modal/constants/ModalTypes";

import TimedButton from "modules/Modal/components/TimedButton.component";

const ModalModule = ({ contentType }) => (
  <div>
    {modalTextContent[contentType].header}

    {modalTextContent[contentType].textualClarification}

    {
      modalTextContent[contentType].type === modalTypes.DELAYED_RESOURCE
      && <TimedButton targetRoute={modalTextContent[contentType].targetRoute} />
    }
  </div>
)


export default ModalModule;
