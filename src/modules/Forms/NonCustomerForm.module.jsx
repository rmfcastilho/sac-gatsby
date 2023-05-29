import React from 'react';
import { Form } from 'react-final-form';
import { useDispatch } from 'react-redux';

import { handleFormFieldChange } from 'modules/Forms/helpers/handleFormFieldChange';

import { FORM_NAMES } from 'modules/Forms/constants/FormNames.constants';

import { FormFieldsWrapper } from "./styles/Form.styles";

import { NON_CUSTOMER_SUBSECTION } from './constants/NonCustomerIdentificationForm.constants';
import { MESSAGE_ENTRY_FORM_SUBSECTION } from './constants/MessageEntryForm.constants';

import FormSubsection from './components/FormSubsection/FormSubsection.component';
import FormSubmission from './components/FormSubmission/FormSubmission.component';

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
            <FormSubsection subsectionData={NON_CUSTOMER_SUBSECTION} />
            <FormSubsection subsectionData={MESSAGE_ENTRY_FORM_SUBSECTION} />
          </FormFieldsWrapper>

          <FormSubmission />
        </form>
      )}
    />
  );
};


export default NonCustomerForm;
