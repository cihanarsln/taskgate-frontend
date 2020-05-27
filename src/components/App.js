import React from 'react';

import Navbar from './Navbar';
import Dashboard from './tasks/Dashboard';

const App = () => {
    return(
        <div>
            <div style={{position:"absolute", width:"200px", height:"100%"}}>
                <Navbar />
            </div>
            <div style={{marginLeft:"230px"}}>
                <Dashboard />
            </div>
        </div>
    );
};

export default App;