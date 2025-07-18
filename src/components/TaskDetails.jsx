import React from 'react';

import { useParams, useNavigate } from 'react-router-dom';

import Button from './Button';

import './TaskDetails.css';

const TaskDetais = () => {

    const params = useParams();

    const navigate = useNavigate();

    const handleBackButtonClick = () => {

        navigate(-1);

    };

    return ( 

        <>
        
            <div className="back-button-container">

                <Button 
                    onClick={handleBackButtonClick}
                >
                    
                    Voltar
                </Button>

            </div>

            <div className="task-details-container">

                <h2>{ params.taskTitle }</h2>

                <p>

                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis nostrum sed nemo. Quis libero laudantium in officia ab at dolores odit quia aperiam natus voluptate, a delectus sed consectetur illo.

                </p>

            </div>

        </>

    );

}
 
export default TaskDetais;