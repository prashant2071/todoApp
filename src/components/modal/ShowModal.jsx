import React from "react";
import BackdropModal from "./Backdrop";
import ReactDOM from "react-dom";
import "./modal.css";

const ShowModal = () => {
  return (
    <>
      <BackdropModal closeModalClick={closeModal} />
      <ModalCard />
      {ReactDOM.createPortal(<BackdropModal closeModalClick={closeModal}/>, portal)}
      {ReactDOM.createPortal(<ModalCard />, document.getElementById("modal"))} 
    </>
  );
};

export default ShowModal;
