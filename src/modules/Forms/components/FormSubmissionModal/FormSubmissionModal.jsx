import React from 'react';
import ReactModal from 'react-modal';

import Button from 'components/Button/Button.component';

import { BUTTON_STYLES, BUTTON_TYPES } from 'constants/button';
import { modalStyles } from "modules/Modal/styles/ReactModalStyles";

import {
  FormSubmissionModalContent,
  FormSubmissionModalTitle,
  FormSubmissionModalText,
} from './styled';

import { InfoSignIcon, TickCircleIcon, Spinner } from 'evergreen-ui';
import * as colors from 'constants/styles/colors';

const FormSubmissionModal = ({
  isModalOpen,
  isSubmitting,
  isSubmissionSuccessful,
  hasSubmitted,
}) => {
  return (
    <ReactModal
      isOpen={isModalOpen}
      style={modalStyles}
    >
      <FormSubmissionModalContent>
        {isSubmitting && (
          <>
            <FormSubmissionModalTitle>
              Enviando seu contato, por favor aguarde
            </FormSubmissionModalTitle>

            <Spinner size={150}/>

            <FormSubmissionModalText>
              Não saia ou recarregue a página
            </FormSubmissionModalText>
          </>
        )}

        {hasSubmitted && !isSubmitting && isSubmissionSuccessful && (
          <>
            <FormSubmissionModalTitle>
              Contato enviado com sucesso!
            </FormSubmissionModalTitle>

            <TickCircleIcon color={colors.colorTurquoiseGreenDark} size={150}/>

            <FormSubmissionModalText>
              Em breve entraremos em contato com você.
            </FormSubmissionModalText>
          </>
        )}

        {hasSubmitted && !isSubmitting && !isSubmissionSuccessful && (
          <>
            <FormSubmissionModalTitle>
              Ocorreu um erro ao enviar seu contato
            </FormSubmissionModalTitle>

            <InfoSignIcon color={colors.colorTurquoiseGreenDark} size={150}/>

            <FormSubmissionModalText>
              Por favor, tente novamente mais tarde.
            </FormSubmissionModalText>
          </>
        )}
      </FormSubmissionModalContent>

      <Button
        label="Voltar à loja"
        link="https://store.ubbeauty.com.br/"
        type={BUTTON_TYPES.LINK}
        buttonStyle={BUTTON_STYLES.PRIMARY}
      />
    </ReactModal>
  );
};

export default FormSubmissionModal;
