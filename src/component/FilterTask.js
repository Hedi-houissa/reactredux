import React, { useState } from "react";
import { Button } from "react-bootstrap";
import ListTask from "./ListTask";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import './Style.css'

// import {filterDone,filterAll,filterUndone} from '../redux/Action/Action'

const FilterTask = () => {
  const dispatch = useDispatch();

  const todoList = useSelector((state) => state.reducer.todoList);
  const [filterList, setfilterList] = useState(todoList);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    switch (filter) {
      case "done":
        setfilterList(todoList.filter((task) => task.isDone === true));
        break;
      case "undone":
        setfilterList(todoList.filter((task) => task.isDone === false));
        break;
      default:
        setfilterList(todoList);
    }
  }, [filter, setfilterList, todoList]);



  
  return (
    <div className="filter_task">
      <div className="button_filter">
        <Button variant="secondary" onClick={() => setFilter("all")}>
          All
        </Button>{" "}
        <Button variant="secondary" onClick={() => setFilter("done")}>
          Done
        </Button>{" "}
        <Button variant="secondary" onClick={() => setFilter("undone")}>
          Not done
        </Button>{" "}
      </div>
      <div className=" list_task">
        <ListTask filter={filterList} />
      </div>
    </div>
  );
};

export default FilterTask;
