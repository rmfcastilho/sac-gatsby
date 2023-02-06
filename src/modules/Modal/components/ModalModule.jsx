import React from "react";

import Button from "components/Button/Button.component";

import { modalTextContent } from "modules/Modal/constants/ModalTextContent";
import { modalTypes } from "modules/Modal/constants/ModalTypes";

import { WarningSignIcon } from "evergreen-ui";
import * as colors from 'constants/styles/colors';
import { BUTTON_TYPES, BUTTON_STYLES } from "constants/button";


import TimedButton from "modules/Modal/components/TimedButton.component";
import {
  InnerModalButtonWrapper,
  InnerModalContentText,
  InnerModalContentWrapper
} from "modules/Modal/components/styles/InnerModalContent.styles";


const ModalModule = ({ contentType }) => (
  <InnerModalContentWrapper>
    <InnerModalContentText>
      {modalTextContent[contentType].header}
    </InnerModalContentText>

    {modalTextContent[contentType].textualClarification !== '' && (
      <>
        <WarningSignIcon color={colors.colorTurquoiseGreenDark} size={150} />

        <InnerModalContentText>
          {modalTextContent[contentType].textualClarification}
        </InnerModalContentText>
      </>
    )}

    <InnerModalButtonWrapper>
      {modalTextContent[contentType].resource !== null
        && <Button
          key="resource"
          type={BUTTON_TYPES.LINK}
          link={modalTextContent[contentType].resource}
          label={modalTextContent[contentType].ctaContent}
          buttonStyle={BUTTON_STYLES.PRIMARY}
        />
      }

      {
        modalTextContent[contentType].type === modalTypes.DELAYED_RESOURCE
        && <TimedButton targetRoute={modalTextContent[contentType].targetRoute} />
      }
    </InnerModalButtonWrapper>
  </InnerModalContentWrapper>
);


export default ModalModule;
