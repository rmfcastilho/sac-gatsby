import React from 'react';

import {
  MESSAGE_ENTRY_FORM_HEADER_REQUIRED,
  MESSAGE_ENTRY_FORM_HEADER_OPTIONAL,
  MESSAGE_ENTRY_FORM_LABELS,
  MESSAGE_ENTRY_FORM_FIELDS,
} from "modules/Forms/constants/MessageEntryForm.constants";

import {
  FormSectionHeaderWrapper,
  FormSubsection,
  StyledFieldFullWidth
} from "modules/Forms/styles/Form.styles";


const MessageEntryForm = ({ isOptional }) => (
  <FormSubsection>
    <FormSectionHeaderWrapper>
      {isOptional
        ? MESSAGE_ENTRY_FORM_HEADER_OPTIONAL
        : MESSAGE_ENTRY_FORM_HEADER_REQUIRED
      }
    </FormSectionHeaderWrapper>

    <StyledFieldFullWidth
      name={MESSAGE_ENTRY_FORM_FIELDS.SUBJECT}
      component="input"
      placeholder={MESSAGE_ENTRY_FORM_LABELS[MESSAGE_ENTRY_FORM_FIELDS.SUBJECT]}
    />

    <StyledFieldFullWidth
      name={MESSAGE_ENTRY_FORM_FIELDS.MESSAGE}
      component="textarea"
      placeholder={MESSAGE_ENTRY_FORM_LABELS[MESSAGE_ENTRY_FORM_FIELDS.MESSAGE]}
    />
  </FormSubsection>
);


export default MessageEntryForm;
