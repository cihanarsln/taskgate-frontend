import React from 'react';

const Stats = () => {
    const stats = ["48", "42", "6"];
    return(
        <div className="ui grid" style={{position:"absolute", bottom: 20, width:"100%"}}>
            <div className="fifteen wide column" style={{fontSize:"14px", fontFamily:"Arvo"}}>
                <div className="ui teal message" style={{width: "100%"}}>
                    <span style={{fontSize: "72px"}}>
                            {stats[0]}
                    </span>
                    tasks
                    <span style={{fontSize: "72px", marginLeft:"30px"}}>
                            {stats[1]}
                    </span>
                    completed
                    <span style={{fontSize: "72px", marginLeft:"30px"}}>
                            {stats[2]}
                    </span>
                    pending
                </div>         
            </div>
            
        </div>
    );
};

export default Stats;