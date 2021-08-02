import React from "react";
import "./style.css";

function TodoItem(props) {
  const { todoList, onClickTodo } = props;

  const handleTodoClick = (index) => {
    if (!onClickTodo) return;
    onClickTodo(index);
  };

  return (
    <ul>
      {todoList.map((todo, index) => (
        <li
          key={`${index}-${todo.id}`}
          className={todo.status === 0 && "completed"}
          onClick={() => handleTodoClick(index)}
        >
          {todo.content}
        </li>
      ))}
    </ul>
  );
}

export default TodoItem;
