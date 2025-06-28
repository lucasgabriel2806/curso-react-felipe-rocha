import React from 'react';

import './Task.css';

const Task = ({ task, handleTaskClick, handleTaskDeletion }) => {

    return (

        <div className="task-container" style={task.completed ? {borderLeft: '6px solid chartreuse'} : {}}>

            <div className="task-title" onClick={() => handleTaskClick(task.id)}>

                {task.title}

            </div>

            <div className="buttons-container">

                <button className="remove-task-button" onClick={handleTaskDeletion}>
                    X
                </button>

                {/* 1:02:10 */}

            </div>

        </div>

    );

    // return <div className="task-container">{task.title}</div>
    
}
 
export default Task;