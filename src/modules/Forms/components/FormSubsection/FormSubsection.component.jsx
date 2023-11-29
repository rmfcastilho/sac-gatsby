import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FormSubsectionHeaderWrapper } from 'modules/Forms/styles/Form.styles';

import { Field } from 'react-final-form';
import formatString from 'format-string-by-pattern';

import { composeValidators } from 'modules/Forms/helpers/composeValidators';
import { setFormFieldValidity } from 'slices/formValidation.slice';
import { FORM_FIELD_CATEGORIES } from 'modules/Forms/constants/HighLevelCategories.constants';

import FormFieldError from 'modules/Forms/components/FormFieldError/FormFieldError';

import { VALIDATION_SELECTORS_PER_FORM } from 'modules/Forms/constants/FormCategorySelectors.constants';

import {
  StyledFormSubsection,
  StyledFieldWrapper,
  FormSubsectionTitle,
  FormSubsectionCompletion,
  ProgressBar,
} from 'modules/Forms/styles/Form.styles';

import StyledField from '../StyledField/StyledField';

const FormSubsection = ({
  subsectionData,
  formNamingData,
}) => {
  const dispatch = useDispatch();
  const { formName, subsectionName } = formNamingData;

  const formValidator = useSelector(VALIDATION_SELECTORS_PER_FORM[formName][subsectionName]);
  const validFields = Object.values(formValidator).filter((fieldValue) => fieldValue).length;

  const completionPercentage = ((validFields / Object.keys(formValidator).length) * 100).toFixed(0);

  const fieldValidationAction = (isValid, fieldName) => {
    dispatch(setFormFieldValidity({
      category: FORM_FIELD_CATEGORIES[fieldName],
      targetForm: formName,
      field: fieldName,
      isValid,
    }));
  }

  return (
    <StyledFormSubsection>
      <FormSubsectionHeaderWrapper>
        <FormSubsectionTitle>
          {subsectionData.title}
        </FormSubsectionTitle>

        <FormSubsectionCompletion>
          {completionPercentage}% completo
        </FormSubsectionCompletion>

        <ProgressBar completionPercentage={completionPercentage} />
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
                <StyledFieldWrapper
                  hasError={hasError}
                  renderMethod={field.renderMethod}
                  onKeyUp={() => fieldValidationAction(!hasError && meta.valid, id)}
                  onBlur={() => fieldValidationAction(!hasError && meta.valid, id)}
                >
                  <StyledField
                    hasError={hasError}
                    type={field.type}
                    placeholder={field.placeholder}
                    input={input}
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
