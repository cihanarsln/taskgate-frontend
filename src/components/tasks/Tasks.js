import React, { useState } from 'react';
import { Table, Button, ButtonGroup } from 'react-bootstrap';
import '../../css/Tasks.css';

const Tasks = () => {
    const [tasks, setTasks] = useState([
        {id: "1", title: "Welcome Page Design", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", startDate: "26.05.2020", dueDate: "30.05.2020", difficulty:"3", manager:{id: "1", name:"John Doe"}, member:{id: "3", name:"Daniel Louis"}},
        {id: "2", title: "Delivery Page Design", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", startDate: "31.05.2020", dueDate: "04.06.2020", difficulty:"2", manager:{id: "1", name:"John Doe"}, member:{id: "3", name:"Daniel Louis"}},
        {id: "3", title: "Cancel Page Design", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", startDate: "05.06.2020", dueDate: "06.06.2020", difficulty:"1", manager:{id: "2", name:"Jack Ma"}, member:{id: "3", name:"Daniel Louis"}},
        {id: "7", title: "Welcome Page Design", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", startDate: "12.05.2020", dueDate: "14.05.2020", difficulty:"1", manager:{id: "1", name:"John Doe"}, member:{id: "3", name:"Daniel Louis"}},
        {id: "8", title: "Delivery Page Design", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", startDate: "15.05.2020", dueDate: "20.06.2020", difficulty:"2", manager:{id: "1", name:"John Doe"}, member:{id: "3", name:"Daniel Louis"}},
        {id: "9", title: "Cancel Page Design", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", startDate: "21.06.2020", dueDate: "24.06.2020", difficulty:"3", manager:{id: "2", name:"Jack Ma"}, member:{id: "3", name:"Daniel Louis"}},
    ]);

    const [managedTasks, setManagedTasks] = useState([
        {id: "4", title: "Pagination Design", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", startDate: "26.05.2020", dueDate: "30.05.2020", difficulty:"3", manager:{id: "3", name:"Daniel Louis"}, member:{id: "4", name:"Alex F."}},
        {id: "5", title: "Icon Design", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", startDate: "31.05.2020", dueDate: "04.06.2020", difficulty:"2", manager:{id: "3", name:"Daniel Louis"}, member:{id: "4", name:"Paul S."}},
        {id: "6", title: "Welcome Page Tests", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", startDate: "05.06.2020", dueDate: "09.06.2020", difficulty:"3", manager:{id: "3", name:"Daniel Louis"}, member:{id: "5", name:"Devid B."}},
        {id: "10", title: "Icon Design", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", startDate: "09.06.2020", dueDate: "11.06.2020", difficulty:"1", manager:{id: "3", name:"Daniel Louis"}, member:{id: "4", name:"Paul S."}},
    ]);
    return(
        <div className="container">
            <Button id="tasks-add-task">
                <i className="fas fa-plus icon-tasks-add"></i>
                Task
            </Button>
            <h1 id="h1-tasks">tasks.</h1>
            {renderTasks(tasks)}
            {renderManagedTasks(managedTasks)}
        </div>
    );
};

const renderTasks = (tasks) => {
    return(
        <div id="tasks-list">
            <h1 id="tasks-list-h1">Tasks</h1>
                <Table responsive>
                    <thead id="tasks-list-title">
                        <tr>
                            <th></th>
                            <th>Title & Description</th>
                            <th>Start Date</th>
                            <th>Due Date</th>
                            <th>Manager</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody id="tasks-list-body">
                        {renderList(tasks)}
                    </tbody>
                </Table>
        </div>
    );
};

const renderList = (tasks) => {
    return tasks.map(task => {
        return(
            <tr key={task.id}>
                <td>
                    {renderDifficultyIcon(task.difficulty)}
                </td>
                <td>
                    {task.title}
                    <br />
                    <span id="tasks-list-description">
                        {task.description}
                    </span>
                </td>
                <td>
                    {task.startDate}
                </td>
                <td>
                    {task.dueDate}
                </td>
                <td>
                    <i className="fas fa-user-circle" id="tasks-manager-icon"></i>
                    {task.manager.name}
                </td>
                <td>
                    <Button variant="success">
                        <i className="fas fa-flag-checkered"></i>
                    </Button>
                </td>
            </tr>
        );
    });
};

const renderManagedTasks = (tasks) => {
    return(
        <div id="tasks-list">
            <h1 id="tasks-list-h1">Managed Tasks</h1>
                <Table responsive>
                    <thead id="tasks-list-title">
                        <tr>
                            <th></th>
                            <th>Title & Description</th>
                            <th>Start Date</th>
                            <th>Due Date</th>
                            <th>Member</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody id="tasks-list-body">
                        {renderManagedList(tasks)}
                    </tbody>
                </Table>
        </div>
    );
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
                    <br />
                    <span id="tasks-list-description">
                        {task.description}
                    </span>
                </td>
                <td>
                    {task.startDate}
                </td>
                <td>
                    {task.dueDate}
                </td>
                <td>
                    <i className="fas fa-user-circle" id="tasks-manager-icon"></i>
                    {task.member.name}
                </td>
                <td>
                    <ButtonGroup>
                        <Button variant="danger">
                            <i className="far fa-trash-alt"></i>
                        </Button>
                        <Button variant="secondary" id="tasks-edit-button">
                            <i className="fas fa-pencil-alt"></i>
                        </Button>
                    </ButtonGroup>
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

export default Tasks;