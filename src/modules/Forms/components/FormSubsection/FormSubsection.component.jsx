import React from 'react';
import { FormSectionHeaderWrapper } from 'modules/Forms/styles/Form.styles';

import { Field } from 'react-final-form';
import formatString from 'format-string-by-pattern';

import { composeValidators } from 'modules/Forms/helpers/composeValidators';

import FormFieldError from 'modules/Forms/components/FormFieldError/FormFieldError';

import { StyledFormSubsection, StyledFieldWrapper } from 'modules/Forms/styles/Form.styles';

import StyledField from '../StyledField/StyledField';

const FormSubsection = ({ subsectionData }) => (
  <StyledFormSubsection>
    <FormSectionHeaderWrapper>
      {subsectionData.title}
    </FormSectionHeaderWrapper>

    {subsectionData.fields.map((field) => {
      const { id, mask, maxLength, validators } = field

      const fieldValidators = validators ? composeValidators(...validators) : undefined;

      return (
        <Field
          key={id}
          name={id}
          parse={mask && formatString(mask)}
          maxLength={maxLength || null}
          validate={fieldValidators}
        >
          {({ input, meta }) => (
            <StyledFieldWrapper renderMethod={field.renderMethod}>
              <StyledField
                hasError={meta.error && meta.touched}
                type={field.type}
                placeholder={field.placeholder}
                input={input}
              />
              {meta.error && meta.touched && <FormFieldError error={meta.error} />}
            </StyledFieldWrapper>
          )}
        </Field>
      );
    })}
  </StyledFormSubsection>
);


export default FormSubsection;
