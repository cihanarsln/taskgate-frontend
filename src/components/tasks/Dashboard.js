import React from 'react';
import '../../css/Dashboard.css';

import TaskDate from "./TaskDate";
import TaskListDashboard from "./TaskListDashboard";
import Stats from './Stats';

const Dashboard = () => {
    return(
        <div className="container">
            <h1 id="h1-dashboard">dashboard.</h1>
            <Stats />
            <TaskDate />
            <TaskListDashboard />
        </div>
    );
};

export default Dashboard;