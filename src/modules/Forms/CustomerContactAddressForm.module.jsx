import React from 'react';
import { Form } from 'react-final-form';

import { FormFieldsWrapper } from './styles/Form.styles';

import { useDispatch } from 'react-redux';
import { handleFormFieldChange } from 'modules/Forms/helpers/handleFormFieldChange';

import { FORM_NAMES } from 'modules/Forms/constants/FormNames.constants';
import { ADDRESS_SUBSECTION } from 'modules/Forms/constants/AddressForm.constants';
import { EXISTING_CUSTOMER_SUBSECTION } from 'modules/Forms/constants/ExistingCustomerIdentificationForm.constants';
import { MESSAGE_ENTRY_FORM_SUBSECTION } from 'modules/Forms/constants/MessageEntryForm.constants';

import FormSubsection from './components/FormSubsection/FormSubsection.component';
import FormSubmission from './components/FormSubmission/FormSubmission.component';


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
            <FormSubsection subsectionData={EXISTING_CUSTOMER_SUBSECTION} />
            <FormSubsection subsectionData={ADDRESS_SUBSECTION} />
            <FormSubsection subsectionData={MESSAGE_ENTRY_FORM_SUBSECTION} />
          </FormFieldsWrapper>

          <FormSubmission />
        </form>
      )}
    />
  )
};


export default CustomerContactAddressForm;
