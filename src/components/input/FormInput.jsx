import React, { useCallback, useState } from "react";
import './input.css'

const FormInput = (props) => {
    console.log("hello formInput",props.inputData);
    // const handleSubmit =(e)=>{
    //     e.preventDefault();
    //     props.submit(input);
    //     setInput("");
    // }
    // const handleChange = (e) =>{
    //     console.log("hello",e.target.value)
    //     const {value} = e.target;
    //     setInput(value);
    // }
  return (
    <>
      <div className="form">
        <form onSubmit={props.submit}>
          <input
            type="text"
            placeholder="Enter task .."
            value={props.inputData}
            onChange={props.onChange}
          />
          <button className="btn-blue" type="submit">
            save
          </button>
        </form>
      </div>
    </>
  );
};

export default React.memo(FormInput);
