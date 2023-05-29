import React from 'react';

import Button from "components/Button/Button.component";

import { FormFooterWrapper, FormSubmissionWrapper } from "modules/Forms/styles/Form.styles";
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

    <FormFooterWrapper>Campos com * são obrigatórios</FormFooterWrapper>
  </FormSubmissionWrapper>
);


export default FormSubmission;
