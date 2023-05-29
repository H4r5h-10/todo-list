import React from "react";
import './Todo.css';
import Icons from "./Icons";

const Todo = (props) => {
  return (
    < >
      {props.toDo &&
        props.toDo
          .sort((a, b) => (a.id > b.id ? 1 : -1))
          .map((task, index) => {
            return (
              <React.Fragment key={task.id}>
                <div className="col taskBg">
                  <div className={task.status ? "done" : ""}>
                    <span className={task.type}></span>
                    <div className="taskText">{task.title}</div>
                    <div>
                    <Icons markDoneTask={props.markDoneTask} setUpdateTask={props.setUpdateTask} deleteTask={props.deleteTask} task={task}/>
                    </div>
                </div>
                

                </div>
              </React.Fragment>
            );
          })}
    </>
  );
};

export default Todo;
