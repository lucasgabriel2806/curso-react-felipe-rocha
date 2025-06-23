import React, { useState } from 'react';

import Button from './Button';

import './AddTask.css';

const AddTask = ({handleTaskAddition}) => {

    const [inputData, setInputData] = useState('');

    const handleInputChange = (e) => {

        // console.log(e.target.value);

        setInputData(e.target.value);

    };

    //46:50

    return (

        <div className="add-task-container">
        
            <input 
                className="add-task-input" 
                onChange={handleInputChange} 
                value={inputData}
                type="text" 
            />;

            <div className="add-task-button-container">

                <Button>Adicionar</Button>

            </div>


        </div>

    )

}

export default AddTask;