import { useRef, useState } from "react";
import "./App.css";
import { List } from "./Components/Todos-List/Todos-List";
import { ListItem } from "./Components/Todos-Item/Todos-Item";

function App() {
  const getItem = JSON.parse(localStorage.getItem("todos"));

  const [todos, setTodos] = useState(getItem ? getItem : []);

  const ref = useRef(null);
  const formRef = useRef(null);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const newTodo = {
      id: todos[todos.length - 1]?.id ? todos[todos.length - 1]?.id + 1 : 1,
      title: ref.current.value,
      isCompleted: false,
    };

    localStorage.setItem("todos", JSON.stringify([...todos, newTodo]));

    setTodos([...todos, newTodo]);
    formRef.current.reset();
  };

  return (
    <div className="App">
      <h2 className="app__title">Todos List</h2>
      <form className="form" ref={formRef} onSubmit={handleSubmit}>
        <input className="form__input" ref={ref} placeholder="todoni kiriting"/>
        <button className="form__btn">Add</button>
      </form>
      <List>
        {todos.map((todo) => (
          <ListItem
            key={todo.id}
            title={todo.title}
            id={todo.id}
            todos={todos}
            setTodos={setTodos}
            isCompleted={todo.isCompleted}
          />
        ))}
      </List>
    </div>
  );
}

export default App;