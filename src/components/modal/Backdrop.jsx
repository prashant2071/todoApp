import React from "react";
import  './backdrop.css'

const BackdropModal = ({closeModalClick}) =>{
return (<>
<div className="backrdop" onClick={closeModalClick}></div>
</>);
}

export default BackdropModal;