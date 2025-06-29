import React from 'react';

import { useParams } from 'react-router-dom';

import Button from './Button';

import './TaskDetails.css';

const TaskDetais = () => {

    const params = useParams();

    // console.log(params);

    return ( 

        <>
        
            <div className="back-button-container">

                <Button>Voltar</Button>

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