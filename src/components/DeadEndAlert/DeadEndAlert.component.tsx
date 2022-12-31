import React from 'react';

import { DeadEndAlertProps } from './types/DeadEndAlert.types';
import { WarningSignIcon } from 'evergreen-ui';


const DeadEndAlert: React.FC<DeadEndAlertProps> = ({ header, message }) => (
  <div className="full-alert">
    <span className="alert-header">{header}</span>
    <WarningSignIcon color="success" />
    <span className="alert-header">{message}</span>
  </div>
);


export default DeadEndAlert;
