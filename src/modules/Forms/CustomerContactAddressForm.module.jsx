import React from 'react';
import { Field, Form } from 'react-final-form';
import formatString from 'format-string-by-pattern';

import Button from 'components/Button/Button.component';

import {
  FormFieldWrapper,
  FormFieldsWrapper,
  FormFooterWrapper,
  FormSectionHeaderWrapper,
  FormSubmissionWrapper,
  FormSubsection, LoneStyledFieldNarrow,
  StyledFieldFullWidth, StyledFieldNarrow, StyledFieldWide, StyledTextArea,
  StyledDoubleFieldRow,
} from './styles/Form.styles';


import { BUTTON_STYLES } from 'constants/button';

import {
  EXISTING_CUSTOMER_ID_FORM_FIELDS,
  EXISTING_CUSTOMER_ID_FORM_HEADER,
  EXISTING_CUSTOMER_ID_FORM_LABELS,
  EXISTING_CUSTOMER_ID_FIELD_MASKS,
} from 'modules/Forms/constants/ExistingCustomerIdentificationForm.constants';

import {
  ADDRESS_FORM_FIELDS,
  ADDRESS_FORM_HEADER,
  ADDRESS_FORM_LABELS,
  ADDRESS_FIELD_MASKS,
} from 'modules/Forms/constants/AddressForm.constants';

import { composeValidators } from 'modules/Forms/helpers/composeValidators';

import {
  isCpfValidValidator,
  isEmailValidValidator,
  isNumberValidator,
  requiredValidator
} from 'modules/Forms/helpers/fieldValidation';

import {
  MESSAGE_ENTRY_FORM_FIELDS,
  MESSAGE_ENTRY_FORM_HEADER_OPTIONAL,
  MESSAGE_ENTRY_FORM_LABELS,
} from 'modules/Forms/constants/MessageEntryForm.constants';

import { useDispatch } from 'react-redux';
import { handleFormFieldChange } from 'modules/Forms/helpers/handleFormFieldChange';
import { FORM_NAMES } from 'modules/Forms/constants/FormNames.constants';
import FormFieldError from 'modules/Forms/components/FormFieldError/FormFieldError';


const CustomerContactAddressForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = () => console.log('Submitted!');
  const handleChange = (event) => handleFormFieldChange(event, FORM_NAMES.CUSTOMER_ADDRESS_FORM, dispatch);

  return (
    <Form
      onSubmit={handleSubmit}
      render={() => (
        <form onChange={handleChange} onSubmit={handleSubmit}>
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
                {ADDRESS_FORM_HEADER}
              </FormSectionHeaderWrapper>

              <Field
                name={ADDRESS_FORM_FIELDS.ZIP}
                parse={formatString(ADDRESS_FIELD_MASKS[ADDRESS_FORM_FIELDS.ZIP])}
                validate={requiredValidator}
                maxLength={9}
              >
                {({ input, meta }) => (
                  <FormFieldWrapper>
                    <LoneStyledFieldNarrow
                      hasError={meta.error && meta.touched}
                      placeholder={ADDRESS_FORM_LABELS[ADDRESS_FORM_FIELDS.ZIP]}
                      type="text"
                      {...input}
                    />
                    {meta.error && meta.touched && <FormFieldError error={meta.error} />}
                  </FormFieldWrapper>
                )}
              </Field>

              <StyledDoubleFieldRow>
                <Field
                  name={ADDRESS_FORM_FIELDS.STREET}
                  validate={requiredValidator}
                >
                  {({ input, meta }) => (
                    <FormFieldWrapper doubleFieldWide>
                      <StyledFieldFullWidth
                        hasError={meta.error && meta.touched}
                        type="text"
                        placeholder={ADDRESS_FORM_LABELS[ADDRESS_FORM_FIELDS.STREET]}
                        {...input}
                      />
                      {meta.error && meta.touched && <FormFieldError error={meta.error} />}
                    </FormFieldWrapper>
                  )}
                </Field>

                <Field
                  name={ADDRESS_FORM_FIELDS.NUMBER}
                  validate={requiredValidator}
                >
                  {({ input, meta }) => (
                    <FormFieldWrapper doubleFieldWide={false}>
                      <StyledFieldFullWidth
                        hasError={meta.error && meta.touched}
                        type="text"
                        placeholder={ADDRESS_FORM_LABELS[ADDRESS_FORM_FIELDS.NUMBER]}
                        {...input}
                      />
                      {meta.error && meta.touched && <FormFieldError error={meta.error} />}
                    </FormFieldWrapper>
                  )}
                </Field>
              </StyledDoubleFieldRow>

              <Field
                name={ADDRESS_FORM_FIELDS.COMPLEMENT}
                validate={requiredValidator}
              >
                {({ input, meta }) => (
                  <>
                    <StyledFieldFullWidth
                      hasError={meta.error && meta.touched}
                      type="text"
                      placeholder={ADDRESS_FORM_LABELS[ADDRESS_FORM_FIELDS.COMPLEMENT]}
                      {...input}
                    />
                    {meta.error && meta.touched && <FormFieldError error={meta.error} />}
                  </>
                )}
              </Field>

              <Field
                name={ADDRESS_FORM_FIELDS.DISTRICT}
                validate={requiredValidator}
              >
                {({ input, meta }) => (
                  <>
                    <StyledFieldFullWidth
                      hasError={meta.error && meta.touched}
                      type="text"
                      placeholder={ADDRESS_FORM_LABELS[ADDRESS_FORM_FIELDS.DISTRICT]}
                      {...input}
                    />
                    {meta.error && meta.touched && <FormFieldError error={meta.error} />}
                  </>
                )}
              </Field>

              <Field
                name={ADDRESS_FORM_FIELDS.CITY}
                validate={requiredValidator}
              >
                {({ input, meta }) => (
                  <>
                    <StyledFieldFullWidth
                      hasError={meta.error && meta.touched}
                      type="text"
                      placeholder={ADDRESS_FORM_LABELS[ADDRESS_FORM_FIELDS.CITY]}
                      {...input}
                    />
                    {meta.error && meta.touched && <FormFieldError error={meta.error} />}
                  </>
                )}
              </Field>

              <Field
                name={ADDRESS_FORM_FIELDS.STATE}
                validate={requiredValidator}
              >
                {({ input, meta }) => (
                  <>
                    <StyledFieldFullWidth
                      hasError={meta.error && meta.touched}
                      type="text"
                      placeholder={ADDRESS_FORM_LABELS[ADDRESS_FORM_FIELDS.STATE]}
                      {...input}
                    />
                    {meta.error && meta.touched && <FormFieldError error={meta.error} />}
                  </>
                )}
              </Field>
            </FormSubsection>

            <FormSubsection>
              <FormSectionHeaderWrapper>
                {MESSAGE_ENTRY_FORM_HEADER_OPTIONAL}
              </FormSectionHeaderWrapper>

              <Field
                name={MESSAGE_ENTRY_FORM_FIELDS.SUBJECT}
              >
                {({ input, meta }) => (
                  <>
                    <StyledFieldFullWidth
                      hasError={meta.error && meta.touched}
                      placeholder={MESSAGE_ENTRY_FORM_LABELS[MESSAGE_ENTRY_FORM_FIELDS.SUBJECT]}
                      type="text"
                      {...input}
                    />
                    {meta.error && meta.touched && <FormFieldError error={meta.error} />}
                  </>
                )}
              </Field>


              <Field
                name={MESSAGE_ENTRY_FORM_FIELDS.MESSAGE}
              >
                {({ input, meta }) => (
                  <>
                    <StyledTextArea
                      hasError={meta.error && meta.touched}
                      placeholder={MESSAGE_ENTRY_FORM_LABELS[MESSAGE_ENTRY_FORM_FIELDS.MESSAGE]}
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


export default CustomerContactAddressForm;
