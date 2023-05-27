import React from 'react';
import { Form, Field } from 'react-final-form';
import { useDispatch } from 'react-redux';

import { composeValidators } from 'modules/Forms/helpers/composeValidators';
import { requiredValidator, isEmailValidValidator } from 'modules/Forms/helpers/fieldValidation';

import Button from 'components/Button/Button.component';

import { handleFormFieldChange } from 'modules/Forms/helpers/handleFormFieldChange';

import { FORM_NAMES } from 'modules/Forms/constants/FormNames.constants';

import FormFieldError from 'modules/Forms/components/FormFieldError/FormFieldError';

import {
  FormFieldsWrapper,
  FormSectionHeaderWrapper,
  FormSubmissionWrapper,
  FormSubsection,
  StyledFieldFullWidth,
  StyledTextArea,
} from "./styles/Form.styles";

import {
  NON_CUSTOMER_FORM_FIELDS,
  NON_CUSTOMER_FORM_HEADER,
  NON_CUSTOMER_FORM_LABELS,
} from 'modules/Forms/constants/NonCustomerIdentificationForm.constants';

import {
  MESSAGE_ENTRY_FORM_FIELDS,
  MESSAGE_ENTRY_FORM_HEADER_REQUIRED,
  MESSAGE_ENTRY_FORM_LABELS,
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

              <Field
                name={NON_CUSTOMER_FORM_FIELDS.NAME}
                validate={composeValidators(requiredValidator)}
              >
                {({ input, meta }) => (
                  <>
                    <StyledFieldFullWidth
                      hasError={meta.error && meta.touched}
                      placeholder={NON_CUSTOMER_FORM_LABELS[NON_CUSTOMER_FORM_FIELDS.NAME]}
                      type="text"
                      {...input}
                    />
                    {meta.error && meta.touched && <FormFieldError error={meta.error} />}
                  </>
                )}
              </Field>

              <Field
                name={NON_CUSTOMER_FORM_FIELDS.EMAIL}
                validate={composeValidators(requiredValidator, isEmailValidValidator)}
              >
                {({ input, meta }) => (
                  <>
                    <StyledFieldFullWidth
                      hasError={meta.error && meta.touched}
                      placeholder={NON_CUSTOMER_FORM_LABELS[NON_CUSTOMER_FORM_FIELDS.EMAIL]}
                      type="email"
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
  );
};


export default NonCustomerForm;
