import React from 'react';

import { CgInfo, CgTrash } from 'react-icons/cg';

import { useNavigate } from 'react-router-dom';

import './Task.css';

const Task = ({ task, handleTaskClick, handleTaskDeletion }) => {

    // Hook para navegar

    const navigate = useNavigate();

    const handleTaskDetailsClick = () => {

        navigate(`/${task.title}`);

    };

    return (

        <div className="task-container" style={task.completed ? {borderLeft: '6px solid chartreuse'} : {}}>

            <div className="task-title" onClick={() => handleTaskClick(task.id)}>

                {task.title}

            </div>

            {/* Icones */}

            <div className="buttons-container">

                <button 
                    className="see-task-details-button" 
                    onClick={() => handleTaskDetailsClick()}
                >

                    <CgInfo />

                </button>

                <button 
                    className="remove-task-button" 
                    onClick={() => handleTaskDeletion(task.id)}
                >

                    <CgTrash />

                </button>

            </div>

        </div>

    );

    // return <div className="task-container">{task.title}</div>
    
}
 
export default Task;