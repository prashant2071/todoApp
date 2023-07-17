import React, { useCallback } from 'react'
import './list.css'
import { AiTwotoneEdit } from "react-icons/ai";
import { FaTrashCan } from "react-icons/fa6";

const List = ({todoList,onDelete,onEdit}) => {
    console.log("hello list");
  return (
    <>
        <ul>
          {
            todoList.map((item, index) => {
              return (
                <li key={item.id}>
                  {item.name}
                  <button
                    className="btn-red"
                    onClick={()=> onDelete(item.id)}
                  >
                    <FaTrashCan style={{fontSize:"20px",marginRight:"10px"}}/>
                    Delete
                  </button>
                  <button
                    className="btn-Edit"
                    onClick={()=>onEdit(item.id)}
                  >
                    <AiTwotoneEdit style={{fontSize:"20px",marginRight:"10px"}}/>
                    Edit
                  </button>
                </li>
              );
            })}
        </ul>
    </>
  )
}

export default React.memo(List);