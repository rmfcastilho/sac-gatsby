import React from 'react';

import Button from "components/Button/Button.component";

import { FormFooterWrapper, FormSubmissionWrapper } from "modules/Forms/styles/Form.styles";
import { BUTTON_STYLES } from "constants/button";


const FormSubmission = ({ isFormValid }) => (
  <FormSubmissionWrapper>
    <Button
      type="submit"
      isDisabled={!isFormValid}
      buttonStyle={BUTTON_STYLES.PRIMARY}
      label={isFormValid ? 'Enviar Solicitação' : 'Preencha os campos obrigatórios'}
      key="submitForm"
    />

    <FormFooterWrapper>Campos com * são obrigatórios</FormFooterWrapper>
  </FormSubmissionWrapper>
);


export default FormSubmission;
