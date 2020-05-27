import React from 'react';

const TaskList = () => {
    const tasks = [
        {id: "1", title: "Welcome Page Design", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", startDate: "26.05.2020", dueDate: "30.05.2020", difficulty:"3", manager:{id: "1", name:"John Doe"}, member:{id: "1", name:"Daniel Louis"}},
        {id: "2", title: "Delivery Page Design", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", startDate: "31.05.2020", dueDate: "04.06.2020", difficulty:"2", manager:{id: "1", name:"John Doe"}, member:{id: "1", name:"Daniel Louis"}},
        {id: "3", title: "Cancel Page Design", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", startDate: "05.06.2020", dueDate: "06.06.2020", difficulty:"1", manager:{id: "2", name:"Margot Palvin"}, member:{id: "1", name:"Daniel Louis"}},
    ];

    return(
        <div className="ui grid" style={{marginTop:"30px"}}>
            <div className="fifteen wide column">
                <div className="ui selection list">
                    <div className="header" style={{fontSize:"16px", fontFamily:"Roboto Slab", color:"#142850", margin:"0px 0px 20px 25px"}}>Upcoming Tasks</div>
                    {renderList(tasks)}                    
                </div>
            </div>
        </div>
        
    );


}

const renderList = (tasks) => {
    return tasks.map(task => {
        return(
            <div className="item" key={task.id} style={{marginBottom:"10px"}}>
                <div className="right floated content">
                    <button className="ui green button" style={{height:"80px"}}>
                        <i className="flag checkered icon" style={{color:"#ffffff"}}></i>
                    </button>
                </div>
                {renderDifficultyIcon(task.difficulty)}
                <div className="content">
                    <span className="header">{task.title}</span>
                    <div className="description">{task.description}</div>
                    <br />
                    <div className="description" style={{fontSize:"12px", fontFamily:"Arvo"}}>
                        <i className="blue calendar alternate outline icon"></i>
                        {task.startDate} - {task.dueDate}
                        <div className="ui basic image label" style={{marginLeft:"30px", border:"None"}}>
                            <i className="pink large user circle icon"/>
                            {task.manager.name}
                        </div>
                    </div> 
                </div>
            </div>
        );
    });
}

const renderDifficultyIcon = (diff) => {
    const diffColor = ["blue", "green", "red"][parseInt(diff, 10)-1];
    const cN = `${diffColor} circle outline icon`;
    return(
        <i className={cN}></i>
    );
}

export default TaskList;