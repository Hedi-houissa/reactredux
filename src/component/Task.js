import React from "react";
import EditTask from "./EditTask";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteTask, completeTask } from "../redux/Action/Action";
import "./Style.css";

const Task = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <div className="line_task">
      <div>
        <span style={task.isDone ? { textDecoration: "line-through" } : null}>
          {task.title}
        </span>
      </div>
      <div className="line_button">
        <EditTask task={task} key={task.id} />
        <Button
          variant="outline-dark"
          onClick={() => dispatch(deleteTask(task.id))}
        >
          Delete
        </Button>
        <Button
          variant="outline-dark"
          onClick={() => dispatch(completeTask(task.id))}
        >
          {task.isDone ? "Undone" : "Done"}
        </Button>{" "}
      </div>
    </div>
  );
};

export default Task;
