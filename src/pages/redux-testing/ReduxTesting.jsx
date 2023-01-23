import React from "react";

import { toggleModal } from "slices/modal.slice";
import { useDispatch } from "react-redux";


const ReduxTesting = () => {
  const dispatch = useDispatch();

  const onClick = () => dispatch(toggleModal());

  return (
    <React.Fragment>
      <div>Redux Testing</div>

      <button onClick={onClick}>
        Toggle Modal
      </button>
    </React.Fragment>
  );
}


export default ReduxTesting;