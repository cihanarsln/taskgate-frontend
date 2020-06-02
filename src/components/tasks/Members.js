import React, { useState } from 'react';
import { Table, Button, ButtonGroup } from 'react-bootstrap';
import '../../css/Members.css';

const Members = () => {
    const [members, setMembers] = useState([
        {id:"1", name: "John Doe", roles: [{id:"1", name:"user"}, {id:"2", name:"manager"}], tasks:"120", completed: "119", inprogress: "1"},
        {id:"2", name: "Jack Ma", roles: [{id:"1", name:"user"}, {id:"2", name:"manager"}], tasks:"94", completed: "92", inprogress: "2"},
        {id:"3", name: "Daniel Louis", roles: [{id:"1", name:"user"}, {id:"2", name:"manager"}], tasks:"48", completed: "42", inprogress: "6"},
        {id:"4", name: "Alex Fergs", roles: [{id:"1", name:"user"}], tasks:"33", completed: "30", inprogress: "3"},
        {id:"5", name: "Paul Schick", roles: [{id:"1", name:"user"}], tasks:"66", completed: "58", inprogress: "8"},
        {id:"6", name: "Devid Beck", roles: [{id:"1", name:"user"}], tasks:"25", completed: "20", inprogress: "5"},
    ]);
    return(
        <div className="container">
             <Button id="members-add-member">
                <i className="fas fa-user-plus icon-member-add"></i>
                Member
            </Button>
            <h1 id="h1-members">members.</h1>
            {renderMembers(members)}
        </div>
    );
}

const renderMembers = (members) => {
    return(
        <div id="member-list">
                <Table responsive>
                    <thead id="members-list-title">
                        <tr>
                            <th>Name</th>
                            <th>Roles</th>
                            <th>Tasks</th>
                            <th>Completed</th>
                            <th>In-progress</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody id="members-list-body">
                        {renderList(members)}
                    </tbody>
                </Table>
        </div>
    );
};

const renderList = (members) => {
    return members.map(member => {
        return(
            <tr key={member.id}>
                <td>
                    {member.name}
                </td>
                <td>
                    {renderRoleLabel(member.roles)}
                </td>
                <td>
                    {member.tasks}
                </td>
                <td>
                    {member.completed}
                </td>
                <td>
                    {member.inprogress}
                </td>
                <td>
                    <ButtonGroup id="members-button-group">
                        <Button variant="danger">
                            <i className="fas fa-user-minus"></i>
                        </Button>
                        <Button variant="secondary" id="member-edit-button">
                            <i className="fas fa-pencil-alt"></i>
                        </Button>
                    </ButtonGroup>
                </td>
            </tr>
        );
    });
};

const renderRoleLabel = (roles) => {
    return(
        <div>
            <div id="role-label-user">
                <i className="fas fa-user icon-members"></i>
                User
            </div>
            {renderManagerLabel(roles)}
        </div>
    );
};

const renderManagerLabel = (roles) => {
    if(roles.some(role => role.name === "manager")){
        return(
            <div id="role-label-manager">
                <i className="fas fa-user-friends icon-members"></i>
                Manager
            </div>
        )
    }
}

export default Members;