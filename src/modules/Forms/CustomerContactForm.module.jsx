import React from 'react';
import { Form } from 'react-final-form';

import Button from 'components/Button/Button.component';

import {
  FormFieldsWrapper, FormFooterWrapper,
  FormSectionHeaderWrapper, FormSubmissionWrapper,
  FormSubsection,
  StyledFieldFullWidth, StyledTextArea
} from "./styles/Form.styles";

import {
  EXISTING_CUSTOMER_ID_FORM_FIELDS,
  EXISTING_CUSTOMER_ID_FORM_HEADER, EXISTING_CUSTOMER_ID_FORM_LABELS
} from 'modules/Forms/constants/ExistingCustomerIdentificationForm.constants';

import {
  MESSAGE_ENTRY_FORM_FIELDS,
  MESSAGE_ENTRY_FORM_HEADER_REQUIRED, MESSAGE_ENTRY_FORM_LABELS
} from 'modules/Forms/constants/MessageEntryForm.constants';

import { BUTTON_STYLES } from 'constants/button';


const handleSubmit = () => console.log('Submitted!');

const CustomerContactForm = () => (
  <Form
    onSubmit={handleSubmit}
    render={() => (
      <form onSubmit={handleSubmit}>
        <FormFieldsWrapper>
          <FormSubsection>
            <FormSectionHeaderWrapper>
              {EXISTING_CUSTOMER_ID_FORM_HEADER}
            </FormSectionHeaderWrapper>

            <StyledFieldFullWidth
              name={EXISTING_CUSTOMER_ID_FORM_FIELDS.ID}
              component="input"
              placeholder={EXISTING_CUSTOMER_ID_FORM_LABELS[
                EXISTING_CUSTOMER_ID_FORM_FIELDS.ID
                ]
              }
            />
            <StyledFieldFullWidth
              name={EXISTING_CUSTOMER_ID_FORM_FIELDS.NAME}
              component="input"
              placeholder={EXISTING_CUSTOMER_ID_FORM_LABELS[
                EXISTING_CUSTOMER_ID_FORM_FIELDS.NAME
                ]
              }
            />
            <StyledFieldFullWidth
              name={EXISTING_CUSTOMER_ID_FORM_FIELDS.EMAIL}
              component="input"
              placeholder={EXISTING_CUSTOMER_ID_FORM_LABELS[
                EXISTING_CUSTOMER_ID_FORM_FIELDS.EMAIL
                ]
              }
            />
            <StyledFieldFullWidth
              name={EXISTING_CUSTOMER_ID_FORM_FIELDS.ORDER_NUMBER}
              component="input"
              placeholder={EXISTING_CUSTOMER_ID_FORM_LABELS[
                EXISTING_CUSTOMER_ID_FORM_FIELDS.ORDER_NUMBER
                ]
              }
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


export default CustomerContactForm;
