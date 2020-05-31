import React from 'react';

import NavigationBar from './NavigationBar';
import Dashboard from './tasks/Dashboard';

const App = () => {
    return(
        <div>
            <NavigationBar />
            <Dashboard />
        </div>
    );
};

export default App;