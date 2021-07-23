import React from 'react'
import Task from './Task'
import './Style.css'

const ListTask = ({filter}) => {
    console.log('list task',filter)
    return (
        <div  >
            {filter.map(task =>
            <Task task={task}  key={task.id}  />
            )}
             
        </div>
    )
}

export default ListTask
