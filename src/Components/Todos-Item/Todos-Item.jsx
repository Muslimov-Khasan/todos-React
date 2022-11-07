import React, { useRef } from "react";
import "./Todos-Item.scss";

export const ListItem = ({ title, id, todos, setTodos, isCompleted }) => {
  const checkRef = useRef(null);

  const handleDelete = () => {
    const filtered = todos.filter((item) => item.id !== id);
    localStorage.setItem("todos", JSON.stringify(filtered));
    setTodos(filtered);
  };
 
  const handleEdit = () => {
    const editedtitle = prompt(`Edit your title "${title}"`, title);
    if (editedtitle.length < 1) {
      alert("Something went wrong");
      return;
    }
    const editedTodoMap = todos.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          title: editedtitle,
        };
      }
      return item;
    });
    setTodos(editedTodoMap);
  };

  const handleCompleted = () => {
    const checkTodos = todos.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isCompleted: checkRef.current.checked,
        };
      }
      return item;
    });
    setTodos(checkTodos);
  };

  const setItem = localStorage.setItem("todo", JSON.stringify(todos));

  return (
    <li className="list__item">
      <div className="list__item-content">
        <input
          onChange={handleCompleted}
          ref={checkRef}
          className="list__item-check"
          type="checkbox"
        />
        {isCompleted ? (
          <s>{title}</s>
        ) : (
          <h3 className="list__item-title">{title}</h3>
        )}
      </div>
      <div className="list__item-btns">
        <button onClick={handleEdit} className="list__item-btn-edit">
          Edit
        </button>
        <button onClick={handleDelete} className="list__item-btn-delete">
          Delete
        </button>
      </div>
    </li>
  );
};