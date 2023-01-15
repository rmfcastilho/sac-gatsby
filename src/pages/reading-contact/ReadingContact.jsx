import React from "react";
import { useSelector } from "react-redux";

import StandardTemplate from 'templates/StandardTemplate.component';
import { questionTypeSelector } from "selectors/questionType.selectors";
import { questionTypes } from "constants/questionTypes";


const ReadingContact = () => {
  const questionType = useSelector(contactTypeSelector);


  return (
    <StandardTemplate>
      <h1>Central de Ajuda</h1>
      { questionType }
    </StandardTemplate>
  )
};


export default ReadingContact;