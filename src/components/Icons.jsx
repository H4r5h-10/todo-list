import React from 'react'
import './Icons.css';
import { BsFillTrashFill } from "react-icons/bs";
import { BsFillCheckSquareFill } from "react-icons/bs";
import { FaPencilAlt } from "react-icons/fa";

const Icons = (props) => {
  return (
    <>
        <div className="icons">
                    <span
                      title="Check"
                      onClick={(e) => props.markDoneTask(props.task.id)}
                    >
                      <BsFillCheckSquareFill />
                    </span>
                    {!props.task.status ? (
                      <span
                        title="Update"
                        onClick={() =>
                          props.setUpdateTask({
                            id: props.task.id,
                            title: props.task.title,
                            status: props.task.status,
                            type: props.task.type
                          })
                        }
                      >
                        <FaPencilAlt />
                      </span>
                    ) : (
                      ""
                    )}
                    <span
                      title="Delete"
                      onClick={(e) => props.deleteTask(props.task.id)}
                    >
                      <BsFillTrashFill />
                    </span>
                  </div>
                
    </>
  )
}

export default Icons
