import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Form, Button } from 'react-bootstrap'
import {addTask}from '../redux/Action/Action'
import './Style.css'


const AddTask = () => {

    const [title, setTitle] = useState("");
    const dispatch = useDispatch() 
    return (
       <div className="add_task">
           <div className="text_task">
           <Form.Control type="text" placeholder="Enter task title ..." className="inputTask"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />
           </div>
            <div>
            <Button variant="light" onClick={() => {
                dispatch(addTask({
                    id: Math.random(),
                    title,
                    isDone: false
                }));
                setTitle("")
            }}>Add</Button>
            </div>
           
       </div>
    )
}

export default AddTask
