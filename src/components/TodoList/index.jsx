import React, { useState } from "react";
import TodoItem from "../TodoItem";
import "./style.css";

function TodoList() {
  const initTodoList = [
    {
      id: 1,
      content: "Wake up",
      status: 0,
    },
    {
      id: 2,
      content: "Have Breakfast",
      status: 1,
    },
    {
      id: 3,
      content: "Drink Coffee",
      status: 1,
    },
    {
      id: 4,
      content: "Reading books",
      status: 0,
    },
  ];
  const [todoList, setTodoList] = useState(initTodoList);
  // const location = useLocation();
  // const [filtersState, setFiltersState] = useState(() => {
  //   const params = queryString.parse(location.search);
  //   console.log("Log : params", params);
  //   return "all";
  // });
  const [filtersState, setFiltersState] = useState("all");

  const handleTodoClick = (index) => {
    console.log("log:  index", index);
    const newTodoList = [...todoList];
    newTodoList[index] = {
      ...newTodoList[index],
      status: newTodoList[index].status === 1 ? 0 : 1,
    };
    setTodoList(newTodoList);
  };

  const handleShowAllClick = () => {
    setFiltersState("all");
  };
  const handleShowCompletedClick = () => {
    setFiltersState(0);
  };
  const handleShowNormalClick = () => {
    setFiltersState(1);
  };

  const renderTodoList = todoList.filter((x) => filtersState === "all" || filtersState === x.status);

  return (
    <div className="todoList">
      <TodoItem todoList={renderTodoList} onClickTodo={handleTodoClick} />
      <button onClick={handleShowAllClick}>Show All</button>
      <button onClick={handleShowCompletedClick}>Show Complete</button>
      <button onClick={handleShowNormalClick}>Show Normal</button>
    </div>
  );
}

export default TodoList;
