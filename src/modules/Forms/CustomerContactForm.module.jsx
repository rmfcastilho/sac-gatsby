import React, { useEffect, useState } from 'react';

import { Form } from 'react-final-form';
import { useDispatch, useSelector } from 'react-redux';

import { FormFieldsWrapper } from "./styles/Form.styles";

import { handleFormFieldChange } from './helpers/handleFormFieldChange';

import { FORM_NAMES } from './constants/FormNames.constants';
import { EXISTING_CUSTOMER_SUBSECTION } from './constants/ExistingCustomerIdentificationForm.constants';
import { MESSAGE_ENTRY_FORM_SUBSECTION } from './constants/MessageEntryForm.constants';
import { FORM_ACTIONS } from 'modules/Forms/constants/FormActions.constants';
import { HIGH_LEVEL_CATEGORIES } from 'modules/Forms/constants/HighLevelCategories.constants';

import { customerFormValidationSelector } from 'selectors/formValidation.selectors';
import { contactReasonSelector } from 'selectors/contactReason.selectors';
import { customerFormSelector } from 'selectors/formSelectors.selectors';

import FormSubsection from './components/FormSubsection/FormSubsection.component';
import FormSubmission from './components/FormSubmission/FormSubmission.component';
import { submitNewRequest } from 'api/submitNewRequest';

import FormSubmissionModal from './components/FormSubmissionModal/FormSubmissionModal';
import { submitAnalyticsEvent } from 'helpers/submitAnalyticsEvent';

const CustomerContactForm = () => {
  const [isFormValid, setIsFormValid] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [isSubmissionSuccessful, setIsSubmissionSuccessful] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();

  const formName = FORM_NAMES.CUSTOMER_FORM;
  const formData = useSelector(customerFormSelector);
  const contactReason = useSelector(contactReasonSelector);

  const formValidator = useSelector(customerFormValidationSelector);
  const areAllCategoriesValid = Object.values(formValidator).every(
    category => Object.values(category).every(field => field === true)
  );

  useEffect(() => {
    setIsFormValid(areAllCategoriesValid);
  }, [areAllCategoriesValid])

  const handleValueChange = (event) => handleFormFieldChange(
    event,
    FORM_ACTIONS[formName],
    dispatch
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setHasSubmitted(true);
    setIsModalOpen(true);

    submitAnalyticsEvent('submit', {
      category: 'Form',
      action: 'Submit',
      label: 'submit_customer_contact_form',
    });

    return submitNewRequest(contactReason, formData).then(
      (result) => {
        setIsSubmissionSuccessful(result.ok);
        setIsSubmitting(false);
      }
    );
  };

  return (
    <>
      <FormSubmissionModal
        isModalOpen={isModalOpen}
        isSubmitting={isSubmitting}
        isSubmissionSuccessful={isSubmissionSuccessful}
        hasSubmitted={hasSubmitted}
      />
      <Form
        onSubmit={handleSubmit}
        render={() => (
          <form onChange={handleValueChange} onSubmit={handleSubmit}>
            <FormFieldsWrapper>
              <FormSubsection
                formNamingData={{
                  formName: formName,
                  subsectionName: HIGH_LEVEL_CATEGORIES.IDENTIFICATION,
                }}
                subsectionData={EXISTING_CUSTOMER_SUBSECTION}
              />
              <FormSubsection
                formNamingData={{
                  formName: formName,
                  subsectionName: HIGH_LEVEL_CATEGORIES.MESSAGE,
                }}
                subsectionData={MESSAGE_ENTRY_FORM_SUBSECTION}
              />
            </FormFieldsWrapper>

            <FormSubmission isFormValid={isFormValid} />
          </form>
        )}
      />
    </>
  )
};


export default CustomerContactForm;
