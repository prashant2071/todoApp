import React from "react";
import BackdropModal from "./Backdrop";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./modal.css";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";

const Modal = ({ closeModal, SubmitModal, inputData, onChange }) => {


  //     <BackdropModal closeModalClick={closeModal} />
  //     <ModalCard />
  //     {/* {ReactDOM.createPortal(<BackdropModal closeModalClick={closeModal}/>, portal)} */}
  //     {/* {ReactDOM.createPortal(<ModalCard />, document.getElementById("modal"))} */}
  return (
    <><BackdropModal closeModalClick={closeModal} />
    <div className="modal">
      
      <FontAwesomeIcon
        icon={faCircleXmark}
        className="cross-icon"
        onClick={closeModal}
      />
      <div className="form">
        <input
          type="text"
          placeholder="Enter place holder"
          value={inputData}
          onChange={onChange}
        />
      </div>
      <div className="footer">
        <button type="button" className="close" onClick={closeModal}>
          Cancel
        </button>
        <button type="button" className="save" onClick={SubmitModal}>
          Save
        </button>
      </div>
    </div></>
  );
};

export default Modal;
