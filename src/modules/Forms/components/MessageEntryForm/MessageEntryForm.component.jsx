import React from 'react';
import {FormSectionHeaderWrapper, FormSubsection, StyledFieldFullWidth} from "modules/Forms/styles/Form.styles";


const MessageEntryForm = ({ isOptional }) => (
  <FormSubsection>
    <FormSectionHeaderWrapper>
      Mensagem
      {`${isOptional ? ' (opcional)' : ''}`}
    </FormSectionHeaderWrapper>

    <StyledFieldFullWidth name="message" component="textarea" placeholder="Mensagem" />
  </FormSubsection>
);


export default MessageEntryForm;
