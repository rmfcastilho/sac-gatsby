import React from 'react';
import { FormSectionHeaderWrapper, StyledFieldFullWidth } from 'modules/Forms/styles/Form.styles';

import { Field } from 'react-final-form';
import formatString from 'format-string-by-pattern';

import { composeValidators } from 'modules/Forms/helpers/composeValidators';

import FormFieldError from 'modules/Forms/components/FormFieldError/FormFieldError';

import { StyledFormSubsection } from 'modules/Forms/styles/Form.styles';


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
            <>
              <StyledFieldFullWidth
                hasError={meta.error && meta.touched}
                type={field.type}
                placeholder={field.placeholder}
                {...input}
              />
              {meta.error && meta.touched && <FormFieldError error={meta.error} />}
            </>
          )}
        </Field>
      );
    })}
  </StyledFormSubsection>
);


export default FormSubsection;
