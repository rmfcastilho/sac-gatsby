import React from 'react';
import { FormSectionHeaderWrapper, StyledFieldFullWidth } from 'modules/Forms/styles/Form.styles';

import { Field } from 'react-final-form';
import formatString from 'format-string-by-pattern';

import { composeValidators } from 'modules/Forms/helpers/composeValidators';
import { isCpfValidValidator, requiredValidator } from 'modules/Forms/helpers/fieldValidation';
import FormFieldError from 'modules/Forms/components/FormFieldError/FormFieldError';

import { FormSubsection } from 'modules/Forms/styles/Form.styles';

const FormSubsectionWrapper = ({ subsectionData }) => (
  <FormSubsection>
    <FormSectionHeaderWrapper>
      {subsectionData.title}
    </FormSectionHeaderWrapper>

    {
      subsectionData.fields.map((field) => {
        const fieldProps = {
          name: field.name,
        };

        return (
          
        )
      })
    }

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
  </FormSubsection>
);

