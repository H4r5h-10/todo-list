import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {RxUpdate} from 'react-icons/rx'
import {ImCross} from 'react-icons/im'
import './update.css'

const Update = (props) => {
  return (
    <>
      <div className="adding">
      <div >
          <button
            className="butn up"
            onClick={props.updateNewTask}
          >
           <RxUpdate/>
          </button>
        </div>
        <div>
          <button
            className="butn up"
            onClick={props.cancelChange}
          >
            <ImCross/>
          </button>
        </div>
        <div>
          <input
            className="add-input"
            value={props.updateTask && props.updateTask.title}
            onChange={(e) => props.changeTask(e)}
          />
        </div>
        
      </div>
      <br />
    </>
  );
};

export default Update;
