import React from 'react';

import Button from "components/Button/Button.component";
import FormFooter from "../FormFooter/FormFooter.component";

import { FormSubmissionWrapper } from "modules/Forms/styles/Form.styles";
import { BUTTON_STYLES } from "constants/button";


const FormSubmission = () => (
  <FormSubmissionWrapper>
    <Button
      type="submit"
      isDisabled={false}
      buttonStyle={BUTTON_STYLES.PRIMARY}
      label="Enviar solicitação"
      key="submitForm"
    />

    <FormFooter />
  </FormSubmissionWrapper>
);


export default FormSubmission;
