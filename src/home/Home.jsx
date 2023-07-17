import React, { useCallback, useState } from "react";
import "./home.css";
import FormInput from "../components/input/FormInput";
import List from "../components/list/List";
const Home = () => {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");
  const [prevData, setPrevData] = useState([]);
  const [Id, setId] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("The link was clicked.");
    if (Id) {
      const editedarray = prevData.map((item) => {
        console.log(item.id);
        console.log(Id);
        if (item.id == Id) {
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
    } else {
      console.log("handleSubmitelse")
      setTodo([...todo, { id: Date.now(), name: input }]);
      console.log("todo in submit", todo);
    }
    setInput("");
  };


  const handleDelete = (Id) => {
    setTodo(prevState=>prevState.filter(item=>item.id!==Id))    //     const list = todoList.filter((item) => item.id !== value);

  };


  const handleChange = (e) => {
    console.log("hello", e.target.value);
    const { value } = e.target;
    setInput(value);
  };


  const handleEdit = (value) => {
    const itemdata = todo.filter((item) => item.id == value);
    console.log("the item data is", itemdata);
    setInput(itemdata[0].name);
    setId(itemdata[0].id);
    setPrevData(todo);
    const list = todo.filter((item) => item.id !== value);
    setTodo([...list]);
  };
  return (
    <div className="todo">
      <div className="container">
        <h1>Todo list </h1>
        <FormInput
          submit={handleSubmit}
          inputData={input}
          onChange={handleChange}
        />
        {todo[0] && (
          <List todoList={todo} onDelete={handleDelete} onEdit={handleEdit} />
        )}
      </div>
    </div>
  );
};

export default Home;
