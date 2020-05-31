import React, { useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import '../../css/TaskListDashboard.css';

const TaskListDashboard = () => {
    const [tasks, setTasks] = useState([
        {id: "1", title: "Welcome Page Design", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", startDate: "26.05.2020", dueDate: "30.05.2020", difficulty:"3", manager:{id: "1", name:"John Doe"}, member:{id: "3", name:"Daniel Louis"}},
        {id: "2", title: "Delivery Page Design", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", startDate: "31.05.2020", dueDate: "04.06.2020", difficulty:"2", manager:{id: "1", name:"John Doe"}, member:{id: "3", name:"Daniel Louis"}},
        {id: "3", title: "Cancel Page Design", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", startDate: "05.06.2020", dueDate: "06.06.2020", difficulty:"1", manager:{id: "2", name:"Jack Ma"}, member:{id: "3", name:"Daniel Louis"}},
    ]);

    const [managedTasks, setManagedTasks] = useState([
        {id: "4", title: "Pagination Design", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", startDate: "26.05.2020", dueDate: "30.05.2020", difficulty:"3", manager:{id: "3", name:"Daniel Louis"}, member:{id: "4", name:"Alex F."}},
        {id: "5", title: "Icon Design", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", startDate: "31.05.2020", dueDate: "04.06.2020", difficulty:"2", manager:{id: "3", name:"Daniel Louis"}, member:{id: "4", name:"Paul S."}},
        {id: "6", title: "Welcome Page Tests", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", startDate: "05.06.2020", dueDate: "09.06.2020", difficulty:"3", manager:{id: "3", name:"Daniel Louis"}, member:{id: "5", name:"Devid B."}},
    ]);

    return(
        <div>
            <div id="dashboard-task-list">
                <h1 id="dashboard-task-list-h1">Upcoming Tasks</h1>
                <Table responsive>
                    <thead id="dashboard-task-list-title">
                        <tr>
                            <th></th>
                            <th>Title</th>
                            <th>Start Date</th>
                            <th>Due Date</th>
                            <th>Manager</th>
                        </tr>
                    </thead>
                    <tbody id="dashboard-task-list-body">
                        {renderList(tasks)}
                    </tbody>
                </Table>
                <Button id="dashboard-task-list-see-all">
                    See all
                    <i className="fas fa-chevron-right" style={{marginLeft:"3px"}}></i>
                </Button>
            </div>
            <div id="dashboard-task-list">
                <h1 id="dashboard-task-list-h1">Managed Tasks</h1>
                <Table responsive>
                    <thead id="dashboard-task-list-title">
                        <tr>
                            <th></th>
                            <th>Title</th>
                            <th>Start Date</th>
                            <th>Due Date</th>
                            <th>Member</th>
                        </tr>
                    </thead>
                    <tbody id="dashboard-task-list-body">
                        {renderManagedList(managedTasks)}
                    </tbody>
                </Table>
                <Button id="dashboard-task-list-see-all">
                    See all
                    <i className="fas fa-chevron-right" style={{marginLeft:"3px"}}></i>
                </Button>
            </div>
        </div>
        
    );


}

const renderList = (tasks) => {
    return tasks.map(task => {
        return(
            <tr key={task.id}>
                <td>
                    {renderDifficultyIcon(task.difficulty)}
                </td>
                <td>
                    {task.title}
                </td>
                <td>
                    {task.startDate}
                </td>
                <td>
                    {task.dueDate}
                </td>
                <td>
                    <i className="fas fa-user-circle" id="manager-icon-dashboard"></i>
                    {task.manager.name}
                </td>
            </tr>
        );
    });
};

const renderManagedList = (tasks) => {
    return tasks.map(task => {
        return(
            <tr key={task.id}>
                <td>
                    {renderDifficultyIcon(task.difficulty)}
                </td>
                <td>
                    {task.title}
                </td>
                <td>
                    {task.startDate}
                </td>
                <td>
                    {task.dueDate}
                </td>
                <td>
                    <i className="fas fa-user-circle" id="manager-icon-dashboard"></i>
                    {task.member.name}
                </td>
            </tr>
        );
    });
};

const renderDifficultyIcon = (diff) => {
    const diffColor = ["blue", "green", "red"][parseInt(diff, 10)-1];
    const cN = `fas fa-exclamation-circle ${diffColor}-difficulty`;
    return(
        <i className={cN}></i>
    );
}

export default TaskListDashboard;