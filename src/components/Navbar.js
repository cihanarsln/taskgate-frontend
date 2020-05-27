import React from 'react';

const Navbar = () => {
    return(
        <div style={{marginTop:"40px", paddingLeft:"10px"}} >
            <span style={{fontFamily: "Fredoka One", fontSize:"30px", color:"#142850"}}>Taskgate</span>
            <div className="ui secondary vertical pointing menu" style={{width:"100%", marginTop:"20px"}}>
                <a className="active item">
                    <i className="table icon"></i>
                    Dashboard
                </a>
                <a className="item">
                    <i className="edit outline icon"></i>
                    Tasks
                </a>
                <a className="item">
                    <i className="calendar alternate outline icon"></i>
                    Meeting
                </a>
                {ManagerMenu()}
            </div>
            <div className="ui relaxed list" style={{position:"fixed", bottom:20}}>
                <div className="item">
                    <i className="big blue user circle outline icon" />
                    <div className="content">
                        <a className="header">Daniel Louise</a>
                        <div><a style={{fontSize:"12px"}}>
                            <i className="sign-out icon"></i>
                            Sign-out
                        </a></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const ManagerMenu = () => {

    const isManager = true;
    if(isManager){
        return(
            <div>
                <a className="item">
                    <i className="users icon"></i>
                    Members
                </a>
            </div>
        );
    }else{
        return <div></div>;
    }
}

export default Navbar;