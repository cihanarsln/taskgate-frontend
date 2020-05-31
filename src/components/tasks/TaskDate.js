import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import '../../css/TaskDate.css';

const TaskDate = () => {
    const twelve = [];
    
    const today = new Date();
    var i;
    for (i = 0; i < 14; i++) {
        const date = new Date(today);
        twelve[i] = date;
        date.setDate(date.getDate()+i)
    }

    const [days, setDays] = useState(twelve);
    const [taskDates, setTaskDates] = useState([twelve[3], twelve[7], twelve[11]]);

    return(
        <div id="task-date">
            <Row>
                {DateCol(taskDates, days[0])} 
                {DateCol(taskDates, days[1])} 
                {DateCol(taskDates, days[2])} 
                {DateCol(taskDates, days[3])} 
                {DateCol(taskDates, days[4])} 
                {DateCol(taskDates, days[5])} 
                {DateCol(taskDates, days[6])} 
                {DateCol(taskDates, days[7])} 
                {DateCol(taskDates, days[8])} 
                {DateCol(taskDates, days[9])} 
                {DateCol(taskDates, days[10])}
                {DateCol(taskDates, days[11])}  
            </Row>
        </div>
    );
}

const DateCol = (taskDates, date) => {
    const text = getDateText(date);
    if(taskDates.includes(date)){
        return(
            <Col xs={4} md={2} lg={1}>
                <div id="task-date-end">
                    <span id="task-date-day">{text[2]}</span>
                    <br />
                    <span id="task-date-day">{text[0]}</span>
                    <br />
                    <span id="task-date-date">{text[1]}</span>
                </div>
            </Col>   
        );
    }else{
        return(
            <Col xs={4} md={2} lg={1}>
                <div id="task-date-normal">
                    <span id="task-date-day">{text[2]}</span>
                    <br />
                    <span id="task-date-day">{text[0]}</span>
                    <br />
                    <span id="task-date-date">{text[1]}</span>
                </div>
            </Col>
        );
    }
};

const getDateText = (date) => {
    const text = [];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Now", "Dec"];
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    text[0] = date.getDate();
    text[1] = months[date.getMonth()];
    text[2] = days[date.getDay()];
    return text;
}

export default TaskDate;