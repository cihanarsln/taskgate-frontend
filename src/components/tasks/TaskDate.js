import React from 'react';

const TaskDate = () => {
    const fourteen = [];
    
    const today = new Date();
    var i;
    for (i = 0; i < 14; i++) {
        const date = new Date(today);
        fourteen[i] = date;
        date.setDate(date.getDate()+i)
    }

    const taskDates = [fourteen[3], fourteen[7], fourteen[13]];

    return(
        <div>
            <div className="ui grid">
                {DateCol(taskDates, fourteen[0])} 
                {DateCol(taskDates, fourteen[1])} 
                {DateCol(taskDates, fourteen[2])} 
                {DateCol(taskDates, fourteen[3])} 
                {DateCol(taskDates, fourteen[4])} 
                {DateCol(taskDates, fourteen[5])} 
                {DateCol(taskDates, fourteen[6])} 
                {DateCol(taskDates, fourteen[7])} 
                {DateCol(taskDates, fourteen[8])} 
                {DateCol(taskDates, fourteen[9])} 
                {DateCol(taskDates, fourteen[10])}
                {DateCol(taskDates, fourteen[11])} 
                {DateCol(taskDates, fourteen[12])} 
                {DateCol(taskDates, fourteen[13])}  
            </div>
        </div>
    );
}

const DateCol = (taskDates, date) => {
    const text = getDateText(date);
    if(taskDates.includes(date)){
        return(
            <div className="one wide column" style={{backgroundColor:"#fde2e2", height:"80px", textAlign:"center", padding:"20px 0px", marginLeft:"5px", fontFamily:"Roboto Slab"}}>
                    <span style={{fontSize:"12px"}}>{text[0]} {text[1]}</span>
                    <br />
                    <span style={{fontSize:"14px"}}>{text[2]}</span>
            </div>   
        );
    }else{
        return(
            <div className="one wide column" style={{backgroundColor:"#ecfbfc", height:"80px", textAlign:"center", padding:"20px 0px", marginLeft:"5px", fontFamily:"Roboto Slab"}}>
                    <span style={{fontSize:"12px"}}>{text[0]} {text[1]}</span>
                    <br />
                    <span style={{fontSize:"14px"}}>{text[2]}</span>
            </div>
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