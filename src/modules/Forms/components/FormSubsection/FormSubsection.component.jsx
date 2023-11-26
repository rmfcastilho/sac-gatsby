import React from 'react';
import { FormSubsectionHeaderWrapper } from 'modules/Forms/styles/Form.styles';

import { Field } from 'react-final-form';
import formatString from 'format-string-by-pattern';

import { composeValidators } from 'modules/Forms/helpers/composeValidators';

import FormFieldError from 'modules/Forms/components/FormFieldError/FormFieldError';

import {
  StyledFormSubsection,
  StyledFieldWrapper,
  FormSubsectionTitle,
  FormSubsectionCompletion
} from 'modules/Forms/styles/Form.styles';

import StyledField from '../StyledField/StyledField';

const FormSubsection = ({ subsectionData, completionPercentage, fieldValidationAction }) => {


  return (
    <StyledFormSubsection>
      <FormSubsectionHeaderWrapper completionPercentage={completionPercentage}>
        <FormSubsectionTitle>
          {subsectionData.title}
        </FormSubsectionTitle>

        <FormSubsectionCompletion>
          % completo
        </FormSubsectionCompletion>
      </FormSubsectionHeaderWrapper>

      {subsectionData.fields.map((field) => {
        const {id, mask, maxLength, validators} = field

        const fieldValidators = validators ? composeValidators(...validators) : undefined;

        return (
          <Field
            key={id}
            name={id}
            parse={mask && formatString(mask)}
            maxLength={maxLength || null}
            validate={fieldValidators}
          >
            {({input, meta}) => {
              const hasError = meta.touched && meta.error;

              return (
                <StyledFieldWrapper hasError={hasError} renderMethod={field.renderMethod}>
                  <StyledField
                    hasError={hasError}
                    type={field.type}
                    placeholder={field.placeholder}
                    input={input}
                    onChange={() => fieldValidationAction(!hasError && meta.valid)}
                  />
                  {hasError && <FormFieldError error={meta.error}/>}
                </StyledFieldWrapper>
              )
            }}
          </Field>
        );
      })}
    </StyledFormSubsection>
  )
};


export default FormSubsection;
