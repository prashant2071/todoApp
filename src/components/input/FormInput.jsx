import React, { useCallback, useState } from "react";
import "./input.css";

const FormInput = (props) => {
  console.log("formInput componet function input value :-", props.inputData);
  return (
    <>
      <div className="form">
        <form onSubmit={props.submit}>
          <input
            type="text"
            placeholder="Enter task .."
            value={!props.edit ? props.inputData : ""}
            onChange={props.onChange}
          />
          <button
            className="btn-blue"
            type="submit"
            onClick={props.SubmitModal}
          >
            save
          </button>
        </form>
      </div>
    </>
  );
};

export default React.memo(FormInput);
