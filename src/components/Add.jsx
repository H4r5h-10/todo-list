import React from 'react';
import './add.css'

const Add = (props) => {
  return (
    <>
    <div className="adding" >
        <div className='buttons'>
          <button onClick={props.addTaskWork} className="butn red"></button>
          <button onClick={props.addTaskPersonal} className="butn blue"></button>
          <button onClick={props.addTaskLeisure} className="butn yellow"></button>
        </div>
        <div className='input-field'>
          <input 
          className='add-input'
          placeholder= "What is your next task?"
          value={props.newTask} 
          onChange = { (e) => props.setNewTask(e.target.value) }
          />
        </div>

      </div>
    </>
  )
}

export default Add
