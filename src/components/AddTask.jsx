import React, { useState } from 'react';

import Button from './Button';

import './AddTask.css';

const AddTask = ({handleTaskAddition}) => {

    const [inputData, setInputData] = useState('');

    const handleInputChange = (e) => {

        // console.log(e.target.value);

        setInputData(e.target.value);

    };

    const handleAddTaskClick = () => {

        handleTaskAddition(inputData);

        setInputData('');

    }

    return (

        <div className='add-task-container'>
        
            <input 
                className='add-task-input' 
                onChange={handleInputChange} 
                value={inputData}
                type='text' 
                placeholder='Adicione uma tarefa...'
            />

            <div className='add-task-button-container'>

                <Button onClick={handleAddTaskClick}>+</Button>

            </div>


        </div>

    )

}

export default AddTask;