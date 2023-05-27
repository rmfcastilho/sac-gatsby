import React from 'react';
import { Form } from 'react-final-form';

import Button from 'components/Button/Button.component';

import {
  FormFieldsWrapper,
  FormFooterWrapper,
  FormSectionHeaderWrapper,
  FormSubmissionWrapper,
  FormSubsection, LoneStyledFieldNarrow,
  StyledFieldFullWidth, StyledFieldNarrow, StyledFieldWide, StyledTextArea,
} from './styles/Form.styles';


import { BUTTON_STYLES } from 'constants/button';

import {
  EXISTING_CUSTOMER_ID_FORM_FIELDS,
  EXISTING_CUSTOMER_ID_FORM_HEADER,
  EXISTING_CUSTOMER_ID_FORM_LABELS,
} from 'modules/Forms/constants/ExistingCustomerIdentificationForm.constants';

import {
  ADDRESS_FORM_FIELDS,
  ADDRESS_FORM_HEADER,
  ADDRESS_FORM_LABELS,
} from 'modules/Forms/constants/AddressForm.constants';

import { composeValidators } from 'modules/Forms/helpers/composeValidators';

import { isNumberValidator, requiredValidator } from 'modules/Forms/helpers/fieldValidation';

import {
  MESSAGE_ENTRY_FORM_FIELDS,
  MESSAGE_ENTRY_FORM_HEADER_OPTIONAL,
  MESSAGE_ENTRY_FORM_LABELS,
} from 'modules/Forms/constants/MessageEntryForm.constants';


const CustomerContactAddressForm = () => {
  const handleSubmit = () => console.log('Submitted!');

  return (
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
                {ADDRESS_FORM_HEADER}
              </FormSectionHeaderWrapper>

              <LoneStyledFieldNarrow
                name={ADDRESS_FORM_FIELDS.ZIP}
                component="input"
                placeholder={ADDRESS_FORM_LABELS[ADDRESS_FORM_FIELDS.ZIP]}
                maxLength={9}
                validate={composeValidators(requiredValidator, isNumberValidator)}
                type="number"
              />

              <StyledFieldWide
                name={ADDRESS_FORM_FIELDS.STREET}
                component="input"
                placeholder={ADDRESS_FORM_LABELS[ADDRESS_FORM_FIELDS.STREET]}
                validate={requiredValidator}
              />
              <StyledFieldNarrow
                name={ADDRESS_FORM_FIELDS.NUMBER}
                component="input"
                placeholder={ADDRESS_FORM_LABELS[ADDRESS_FORM_FIELDS.NUMBER]}
                validate={composeValidators(requiredValidator, isNumberValidator)}
              />

              <StyledFieldFullWidth
                name={ADDRESS_FORM_FIELDS.COMPLEMENT}
                component="input"
                placeholder={ADDRESS_FORM_LABELS[ADDRESS_FORM_FIELDS.COMPLEMENT]}
                validate={requiredValidator}
              />

              <StyledFieldFullWidth
                name={ADDRESS_FORM_FIELDS.DISTRICT}
                component="input"
                placeholder={ADDRESS_FORM_LABELS[ADDRESS_FORM_FIELDS.DISTRICT]}
                validate={requiredValidator}
              />

              <StyledFieldWide
                name={ADDRESS_FORM_FIELDS.CITY}
                component="input"
                placeholder={ADDRESS_FORM_LABELS[ADDRESS_FORM_FIELDS.CITY]}
                validate={requiredValidator}
              />

              <StyledFieldNarrow
                name={ADDRESS_FORM_FIELDS.STATE}
                component="input"
                placeholder={ADDRESS_FORM_LABELS[ADDRESS_FORM_FIELDS.STATE]}
                validate={requiredValidator}
              />
            </FormSubsection>

            <FormSubsection>
              <FormSectionHeaderWrapper>
                {MESSAGE_ENTRY_FORM_HEADER_OPTIONAL}
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
  )
};


export default CustomerContactAddressForm;
