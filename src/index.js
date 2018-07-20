import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './components/login_component';
import UserPage from './components/user_component';
import {BrowserRouter, Route} from 'react-router-dom';
//import {ComponentName} from './components/{component_name}';


/*
  **TO DO
  **fix UserPage link to have /:id at the end
  **create actions
  **promote smart components into containers
  **integrate authentication service
  **add create workout functionality
  **
*/
class App extends React.Component
{
  render()
  {
    return(
      <BrowserRouter>
        <div>
          <Route path="/login" component={LoginPage} />
          <Route path="/user/" component={UserPage} />
        </div>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
