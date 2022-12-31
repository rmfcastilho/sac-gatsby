import React from "react";
import { nonClientButtonData } from "../data/buttons/buttons";
import Button from "../components/Button/Button.component";
import { ButtonBehaviors } from "../constants/button";


const NonClient = () => {
  const buttonsToRender = nonClientButtonData.map((buttonData) => (
    <Button
      key={buttonData.id}
      isDisabled={false}
      type={
        buttonData.behavior === ButtonBehaviors.REDIRECT ? "link" : "button"
      }
      label={buttonData.label}
      link={buttonData.behaviorData}
    />
  ));

  return <div className="client">{buttonsToRender}</div>;
};


export default NonClient;
