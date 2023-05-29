import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Update from "./components/Update";
import Add from "./components/Add";
import Todo from "./components/Todo";
import Info from "./components/Info";

function App() {
  const [toDo, setTodo] = useState([]);

  const [newTask, setNewTask] = useState("");

  const [updateTask, setUpdateTask] = useState("");



  // adds a task to the todo array

  useEffect(() => {
    const toDo = JSON.parse(localStorage.getItem('toDo'));
    if (toDo) {
      setTodo(toDo);
    }
  }, []);

  const addTaskWork = () => {
    if (newTask) {
      let newId = toDo.length + 1;
      let newData = { id: newId, title: newTask, status: false, type: "work"};
      setTodo([...toDo, newData]);
      localStorage.setItem('toDo', JSON.stringify([...toDo, newData]));
      setNewTask("");
    }
  };
  const addTaskPersonal = () => {
    if (newTask) {
      let newId = toDo.length + 1;
      let newData = { id: newId, title: newTask, status: false, type: "personal"};
      setTodo([...toDo, newData]);
      localStorage.setItem('toDo', JSON.stringify([...toDo, newData]));
      setNewTask("");
    }
  };
  const addTaskLeisure = () => {
    if (newTask) {
      let newId = toDo.length + 1;
      let newData = { id: newId, title: newTask, status: false, type: "leisure"};
      setTodo([...toDo, newData]);
      localStorage.setItem('toDo', JSON.stringify([...toDo, newData]));
      setNewTask("");
    }
  };

  //stores the updated element into updateTask
  const changeTask = (e) => {
    let newitem = {
      id: updateTask.id,
      title: e.target.value,
      status: updateTask.status,
      type: updateTask.type
    };
    setUpdateTask(newitem);
  };

  //updates the updated element into the todo array
  const updateNewTask = () => {
    let newdata = [...toDo].filter((task) => task.id !== updateTask.id);
    let newitem = [...newdata, updateTask];
    setTodo(newitem);
    localStorage.setItem('toDo', JSON.stringify(newitem));
    setUpdateTask("");
  };

  //cancel update button
  const cancelChange = () => {
    setUpdateTask("");
  };

  //deletes a task from the array
  const deleteTask = (id) => {
    if (updateTask && updateTask.id === id) setUpdateTask("");
    setTodo(toDo.filter((task) => task.id !== id));
    localStorage.setItem('toDo', JSON.stringify(toDo.filter((task) => task.id !== id)));
  };

  //marks a task as done
  const markDoneTask = (id) => {
    let newTask = toDo.map((task) => {
      if (task.id === id) {
        return { ...task, status: !task.status };
      }
      return task;
    });
    setTodo(newTask);
    localStorage.setItem('toDo', JSON.stringify(newTask));
  };
  /////////////////////////////////////////////////////////


  return (
    <div className="container App">
      <span className="circle1"></span>
      <span className="circle2"></span>
      <span className="circle3"></span>
      <Info />
      {/* Updating a task field*/}
      <div className="area">
        <h1 className="area-heading">Today's Tasks</h1>
        <br/>
        {updateTask ? (
          <Update
            updateTask={updateTask}
            updateNewTask={updateNewTask}
            cancelChange={cancelChange}
            changeTask={changeTask}
          />
        ) : (
          ""
        )}

        {/* Adding a task field */}
        <Add newTask={newTask} setNewTask={setNewTask} addTaskWork={addTaskWork} addTaskPersonal={addTaskPersonal} addTaskLeisure={addTaskLeisure}/>

        {/* Adding items to the list */}
        
        <div className="items">
          <div className="notasks">{toDo.length ? "" : "Increase your productivity..."}</div>
        <Todo
          toDo={toDo}
          setUpdateTask={setUpdateTask}
          markDoneTask={markDoneTask}
          deleteTask={deleteTask}
        />
        </div>
      </div>
    </div>
  );
}

export default App;
