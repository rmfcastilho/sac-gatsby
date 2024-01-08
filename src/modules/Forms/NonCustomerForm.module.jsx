import React, { useState, useEffect } from 'react';
import ReactGA from 'react-ga';

import { Form } from 'react-final-form';
import { useDispatch, useSelector } from 'react-redux';

import { handleFormFieldChange } from 'modules/Forms/helpers/handleFormFieldChange';

import { FORM_NAMES } from 'modules/Forms/constants/FormNames.constants';

import { FormFieldsWrapper } from "./styles/Form.styles";

import { NON_CUSTOMER_SUBSECTION } from './constants/NonCustomerIdentificationForm.constants';
import { MESSAGE_ENTRY_FORM_SUBSECTION } from './constants/MessageEntryForm.constants';

import FormSubsection from './components/FormSubsection/FormSubsection.component';
import FormSubmission from './components/FormSubmission/FormSubmission.component';
import FormSubmissionModal from 'modules/Forms/components/FormSubmissionModal/FormSubmissionModal';

import { FORM_ACTIONS } from 'modules/Forms/constants/FormActions.constants';
import { HIGH_LEVEL_CATEGORIES } from 'modules/Forms/constants/HighLevelCategories.constants';

import { submitNewRequest } from 'api/submitNewRequest';

import { nonCustomerFormSelector } from 'selectors/formSelectors.selectors';
import { nonCustomerFormValidationSelector } from 'selectors/formValidation.selectors';
import { contactReasonSelector } from 'selectors/contactReason.selectors';


const NonCustomerForm = () => {
  const [isFormValid, setIsFormValid] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [isSubmissionSuccessful, setIsSubmissionSuccessful] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();

  const formName = FORM_NAMES.NON_CUSTOMER_FORM;
  const formData = useSelector(nonCustomerFormSelector);
  const contactReason = useSelector(contactReasonSelector);

  const formValidator = useSelector(nonCustomerFormValidationSelector);
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
    ReactGA.event({
      category: 'Form',
      action: 'Submit',
      label: 'submitted_customer_contact_form',
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
          <form onSubmit={handleSubmit} onChange={handleValueChange}>
            <FormFieldsWrapper>
              <FormSubsection
                formNamingData={{
                  formName: formName,
                  subsectionName: HIGH_LEVEL_CATEGORIES.IDENTIFICATION,
                }}
                subsectionData={NON_CUSTOMER_SUBSECTION}
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
  );
};


export default NonCustomerForm;
