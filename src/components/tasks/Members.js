import React, { useState } from 'react';
import { Table, Button } from 'react-bootstrap';
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
                            <th>Role</th>
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
                    <Button variant="success">
                        <i className="fas fa-flag-checkered"></i>
                    </Button>
                </td>
            </tr>
        );
    });
};

const renderRoleLabel = (roles) => {
    
}

export default Members;