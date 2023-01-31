import React from 'react';

import Button from "components/Button/Button.component";
import FormFooter from "../FormFooter/FormFooter.component";

import { FormSubmissionWrapper } from "modules/forms/styles/Form.styles";
import { buttonStyles } from "constants/button";


const FormSubmission = () => (
  <FormSubmissionWrapper>
    <Button
      type="submit"
      isDisabled={false}
      buttonStyle={buttonStyles.PRIMARY}
      label="Enviar solicitação"
      key="submitForm"
    />

    <FormFooter />
  </FormSubmissionWrapper>
);


export default FormSubmission;
