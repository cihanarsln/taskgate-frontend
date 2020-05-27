import React from 'react';

import TaskDate from "./TaskDate";
import TaskList from "./TaskList";

const Dashboard = () => {
    return(
        <div style={{paddingTop:"40px"}}>
            <TaskDate />
            <TaskList />
        </div>
    );
};

export default Dashboard;