import './App.css';

import React from "react";
import { BrowserRouter as Router, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddCustomerPage from './pages/AddCustomer';
import CreateJobPage from './pages/CreateJob';

function App() {

    return (
        <div className="App">
            <Router>
                <header className="App-header">
                    <Route path={"/"} exact>
                        <HomePage/>
                    </Route>
                    <Route path={"/add-customer"} exact>
                        <AddCustomerPage/>
                    </Route>
                    <Route path={"/create-job"} exact>
                        <CreateJobPage/>
                    </Route>
                </header>
            </Router>
        </div>
    );
}

export default App;
