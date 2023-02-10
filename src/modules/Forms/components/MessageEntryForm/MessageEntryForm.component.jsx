import React from 'react';
import { useDispatch } from "react-redux";

import { updateMessageEntryForm } from "slices/formSlices/messageEntryForm.slice";

import {
  MESSAGE_ENTRY_FORM_HEADER_REQUIRED,
  MESSAGE_ENTRY_FORM_HEADER_OPTIONAL,
  MESSAGE_ENTRY_FORM_LABELS,
  MESSAGE_ENTRY_FORM_FIELDS,
} from "modules/Forms/constants/MessageEntryForm.constants";

import {
  FormSectionHeaderWrapper,
  FormSubsection,
  StyledFieldFullWidth,
  StyledTextArea,
} from "modules/Forms/styles/Form.styles";


const MessageEntryForm = ({ isOptional }) => {
  const dispatch = useDispatch();

  const handleChange = (e) => dispatch(
    updateMessageEntryForm(({
      name: e.target.name,
      value: e.target.value,
    })),
  );

  return (
    <FormSubsection onChange={handleChange}>
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

      <StyledTextArea
        name={MESSAGE_ENTRY_FORM_FIELDS.MESSAGE}
        component="textarea"
        placeholder={MESSAGE_ENTRY_FORM_LABELS[MESSAGE_ENTRY_FORM_FIELDS.MESSAGE]}
      />
    </FormSubsection>
  );
}

export default MessageEntryForm;
