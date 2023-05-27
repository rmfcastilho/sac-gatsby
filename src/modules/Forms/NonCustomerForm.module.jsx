import React from 'react';
import { Form } from 'react-final-form';
import { useDispatch } from 'react-redux';

import Button from 'components/Button/Button.component';

import { handleFormFieldChange } from 'modules/Forms/helpers/handleFormFieldChange';

import { FORM_NAMES } from 'modules/Forms/constants/FormNames.constants';

import {
  FormFieldsWrapper,
  FormSectionHeaderWrapper, FormSubmissionWrapper,
  FormSubsection,
  StyledFieldFullWidth, StyledTextArea
} from "./styles/Form.styles";

import {
  NON_CUSTOMER_FORM_FIELDS,
  NON_CUSTOMER_FORM_HEADER, NON_CUSTOMER_FORM_LABELS
} from 'modules/Forms/constants/NonCustomerIdentificationForm.constants';

import {
  MESSAGE_ENTRY_FORM_FIELDS,
  MESSAGE_ENTRY_FORM_HEADER_REQUIRED, MESSAGE_ENTRY_FORM_LABELS
} from 'modules/Forms/constants/MessageEntryForm.constants';

import { BUTTON_STYLES } from 'constants/button';
import { FormFooterWrapper } from './styles/Form.styles';


const handleSubmit = () => console.log('Submitted!');

const NonCustomerForm = () => {
  const dispatch = useDispatch();

  const handleChange = (event) => handleFormFieldChange(event, FORM_NAMES.NON_CUSTOMER_FORM, dispatch);

  return (
    <Form
      onSubmit={handleSubmit}
      render={() => (
        <form onSubmit={handleSubmit} onChange={handleChange}>
          <FormFieldsWrapper>

            <FormSubsection>
              <FormSectionHeaderWrapper>
                {NON_CUSTOMER_FORM_HEADER}
              </FormSectionHeaderWrapper>

              <StyledFieldFullWidth
                name={NON_CUSTOMER_FORM_FIELDS.NAME}
                component="input"
                placeholder={NON_CUSTOMER_FORM_LABELS[NON_CUSTOMER_FORM_FIELDS.NAME]}
              />
              <StyledFieldFullWidth
                name={NON_CUSTOMER_FORM_FIELDS.EMAIL}
                component="input"
                placeholder={NON_CUSTOMER_FORM_LABELS[NON_CUSTOMER_FORM_FIELDS.EMAIL]}
              />
            </FormSubsection>

            <FormSubsection>
              <FormSectionHeaderWrapper>
                {MESSAGE_ENTRY_FORM_HEADER_REQUIRED}
              </FormSectionHeaderWrapper>

              <StyledFieldFullWidth
                name={MESSAGE_ENTRY_FORM_FIELDS.SUBJECT}
                component="input"
                placeholder={MESSAGE_ENTRY_FORM_LABELS[MESSAGE_ENTRY_FORM_FIELDS.SUBJECT]}
              />

              <StyledTextArea
                name={MESSAGE_ENTRY_FORM_FIELDS.MESSAGE}
                component="textarea"
                placeholder={MESSAGE_ENTRY_FORM_LABELS[MESSAGE_ENTRY_FORM_FIELDS.MESSAGE]}
              />
            </FormSubsection>
          </FormFieldsWrapper>

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
        </form>
      )}
    />
  );
};


export default NonCustomerForm;
