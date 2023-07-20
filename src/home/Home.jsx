import React, { useCallback, useState } from "react";
import "./home.css";
import FormInput from "../components/input/FormInput";
import List from "../components/list/List";
import Modal from "../components/modal/Modal";
const Home = () => {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");
  const [prevData, setPrevData] = useState([]);
  const [showModel, setShowModel] = useState(false);
  const [Id, setId] = useState("");
  const [edit, setEdit] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("The link was clicked.");
    if (Id) {
      const editedarray = prevData.map((item) => {
        console.log(item.id);
        console.log(Id);
        if (item.id === Id) {
          console.log("hello");
          return {
            id: item.id,
            name: input,
          };
        } else {
          return item;
        }
      });

      console.log("the edited array is", editedarray);
      setTodo(editedarray);
      setId("");
    } else {
      console.log("handleSubmitelse");
      setTodo([...todo, { id: Date.now(), name: input }]);
      console.log("todo in submit", todo);
    }
    setInput("");
    setEdit(false);
  };

  const handleDelete = (Id) => {
    setTodo((prevState) => prevState.filter((item) => item.id !== Id)); //     const list = todoList.filter((item) => item.id !== value);
  };

  const handleChange = (e) => {
    console.log("handleChange function called input value", e.target.value);
    const { value } = e.target;
    setInput(value);
  };

  const closeModalHandler = () => {
    setShowModel(false);
  };
  const EditModalHandler = () => {
    if (Id) {
      const editedarray = prevData.map((item) => {
        if (item.id == Id) {
          console.log("EditModalHandler function called");
          return {
            id: item.id,
            name: input,
          };
        } else {
          return item;
        }
      });
      console.log("the edited array is", editedarray);
      setTodo(editedarray);
      setShowModel(false);
      setEdit(true);
      setId(0);
      setInput("");
    }
  };

  const handleEdit = (value) => {
    setShowModel(true);
    setEdit(true);
    const itemdata = todo.filter((item) => item.id == value);
    console.log("handle edit function itemData value", itemdata);
    setInput(itemdata[0].name);
    setId(itemdata[0].id);
    setPrevData(todo);
  };

  return (
    <>
      <div className="todo">
        <div className="container">
          <h1>Todo list </h1>
          <FormInput
            submit={handleSubmit}
            inputData={input}
            onChange={handleChange}
            Edit={edit}
          />
          {todo[0] && (
            <List todoList={todo} onDelete={handleDelete} onEdit={handleEdit} />
          )}
        </div>
      </div>
      {showModel && (
        <Modal
          closeModal={closeModalHandler}
          SubmitModal={EditModalHandler}
          inputData={input}
          onChange={handleChange}
        />
      )}
    </>
  );
};
export default Home;
