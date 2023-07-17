import React from 'react'
import BackdropModal from './Backdrop';
import ReactDOM from 'react-dom';
import './modal.css'

const Modal = () => {
  const closeModal = () =>{
    console.log("hello")
  }
  const SubmitModal = () =>{
    console.log("hello")
  }

  const ModalCard = ()=>{
    return (
      <div className='modal'>
        <button className='close'>close</button>
        <div className="form">
          <input type='text' placeholder='Enter place holder'/>
        </div>
        <div className="footer">
          <button type='button' className='close' onClick={SubmitModal}>Cancel</button>
          <button type='button' className='save' onClick={closeModal}>Save</button>
        </div>
      </div>
    )
  }
  const portal = document.getElementById('overlays')
  return (
    <>
    {ReactDOM.createPortal(<BackdropModal/>,portal)}
    {ReactDOM.createPortal(<ModalCard/>,document.getElementById('modal'))}
    </>
  )
}

export default Modal