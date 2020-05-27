import React from 'react';

import TaskDate from "./TaskDate";
import TaskList from "./TaskList";
import Stats from './Stats';

const Dashboard = () => {
    return(
        <div style={{paddingTop:"40px"}}>
            <TaskDate />
            <TaskList />  
            <Stats />
        </div>
    );
};

export default Dashboard;