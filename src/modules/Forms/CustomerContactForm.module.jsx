import React from 'react';
import { Form, Field } from 'react-final-form';
import { useDispatch } from 'react-redux';
import formatString from 'format-string-by-pattern';

import { composeValidators } from 'modules/Forms/helpers/composeValidators';
import { requiredValidator, isEmailValidValidator, isCpfValidValidator } from 'modules/Forms/helpers/fieldValidation';

import FormFieldError from 'modules/Forms/components/FormFieldError/FormFieldError';
import Button from 'components/Button/Button.component';

import {
  FormFieldsWrapper,
  FormFooterWrapper,
  FormSectionHeaderWrapper,
  FormSubmissionWrapper,
  FormSubsection,
  StyledFieldFullWidth,
  StyledTextArea,
} from "./styles/Form.styles";

import {
  EXISTING_CUSTOMER_ID_FORM_FIELDS,
  EXISTING_CUSTOMER_ID_FORM_HEADER,
  EXISTING_CUSTOMER_ID_FORM_LABELS,
  EXISTING_CUSTOMER_ID_FIELD_MASKS,
} from 'modules/Forms/constants/ExistingCustomerIdentificationForm.constants';

import {
  MESSAGE_ENTRY_FORM_FIELDS,
  MESSAGE_ENTRY_FORM_HEADER_REQUIRED,
  MESSAGE_ENTRY_FORM_LABELS,
} from 'modules/Forms/constants/MessageEntryForm.constants';

import { BUTTON_STYLES } from 'constants/button';
import { handleFormFieldChange } from 'modules/Forms/helpers/handleFormFieldChange';
import { FORM_NAMES } from 'modules/Forms/constants/FormNames.constants';


const handleSubmit = () => console.log('Submitted!');

const CustomerContactForm = () => {
  const dispatch = useDispatch();

  const handleChange = (event) => handleFormFieldChange(event, FORM_NAMES.CUSTOMER_FORM, dispatch);

  return (
    <Form
      onSubmit={handleSubmit}
      render={() => (
        <form onSubmit={handleSubmit} onChange={handleChange}>
          <FormFieldsWrapper>
            <FormSubsection>
              <FormSectionHeaderWrapper>
                {EXISTING_CUSTOMER_ID_FORM_HEADER}
              </FormSectionHeaderWrapper>

              <Field
                name={EXISTING_CUSTOMER_ID_FORM_FIELDS.ID}
                parse={formatString(EXISTING_CUSTOMER_ID_FIELD_MASKS[EXISTING_CUSTOMER_ID_FORM_FIELDS.ID])}
                maxLength={14}
                validate={composeValidators(requiredValidator, isCpfValidValidator)}
              >
                {({ input, meta }) => (
                  <>
                    <StyledFieldFullWidth
                      hasError={meta.error && meta.touched}
                      type="text"
                      placeholder={EXISTING_CUSTOMER_ID_FORM_LABELS[
                        EXISTING_CUSTOMER_ID_FORM_FIELDS.ID
                        ]
                      }
                      {...input}
                    />
                    {meta.error && meta.touched && <FormFieldError error={meta.error} />}
                  </>
                )}
              </Field>

              <Field
                name={EXISTING_CUSTOMER_ID_FORM_FIELDS.NAME}
                validate={requiredValidator}
              >
                {({ input, meta }) => (
                  <>
                    <StyledFieldFullWidth
                      hasError={meta.error && meta.touched}
                      type="text"
                      placeholder={EXISTING_CUSTOMER_ID_FORM_LABELS[
                        EXISTING_CUSTOMER_ID_FORM_FIELDS.NAME
                        ]
                      }
                      {...input}
                    />
                    {meta.error && meta.touched && <FormFieldError error={meta.error} />}
                  </>
                )}
              </Field>

              <Field
                name={EXISTING_CUSTOMER_ID_FORM_FIELDS.EMAIL}
                validate={composeValidators(requiredValidator, isEmailValidValidator)}
              >
                {({ input, meta }) => (
                  <>
                    <StyledFieldFullWidth
                      hasError={meta.error && meta.touched}
                      placeholder={EXISTING_CUSTOMER_ID_FORM_LABELS[EXISTING_CUSTOMER_ID_FORM_FIELDS.EMAIL]}
                      type="email"
                      {...input}
                    />
                    {meta.error && meta.touched && <FormFieldError error={meta.error} />}
                  </>
                )}
              </Field>

              <Field
                name={EXISTING_CUSTOMER_ID_FORM_FIELDS.ORDER_NUMBER}
                validate={requiredValidator}
              >
                {({ input, meta }) => (
                  <>
                    <StyledFieldFullWidth
                      hasError={meta.error && meta.touched}
                      type="text"
                      placeholder={EXISTING_CUSTOMER_ID_FORM_LABELS[
                        EXISTING_CUSTOMER_ID_FORM_FIELDS.ORDER_NUMBER
                        ]
                      }
                      {...input}
                    />
                    {meta.error && meta.touched && <FormFieldError error={meta.error} />}
                  </>
                )}
              </Field>

            </FormSubsection>

            <FormSubsection>
              <FormSectionHeaderWrapper>
                {MESSAGE_ENTRY_FORM_HEADER_REQUIRED}
              </FormSectionHeaderWrapper>

              <Field
                name={MESSAGE_ENTRY_FORM_FIELDS.SUBJECT}
                validate={composeValidators(requiredValidator)}
              >
                {({ input, meta }) => (
                  <>
                    <StyledFieldFullWidth
                      hasError={meta.error && meta.touched}
                      placeholder={`${MESSAGE_ENTRY_FORM_LABELS[MESSAGE_ENTRY_FORM_FIELDS.SUBJECT]} *`}
                      type="text"
                      {...input}
                    />
                    {meta.error && meta.touched && <FormFieldError error={meta.error} />}
                  </>
                )}
              </Field>


              <Field
                name={MESSAGE_ENTRY_FORM_FIELDS.MESSAGE}
                validate={composeValidators(requiredValidator)}
              >
                {({ input, meta }) => (
                  <>
                    <StyledTextArea
                      hasError={meta.error && meta.touched}
                      placeholder={`${MESSAGE_ENTRY_FORM_LABELS[MESSAGE_ENTRY_FORM_FIELDS.MESSAGE]} *`}
                      type="text"
                      {...input}
                    />
                    {meta.error && meta.touched && <FormFieldError error={meta.error} />}
                  </>
                )}
              </Field>
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


export default CustomerContactForm;
