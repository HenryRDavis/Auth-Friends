import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute'
import Login from './components/Login';
import Friends from './components/Friends'
import styled from 'styled-components'

const StyledDiv = styled.div`
display:flex;
/* justify-content:end; */
`

function App() {
  return (
  
    <Router>
      <StyledDiv className="App">
            <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/protected">Friends Page</Link>
          </li>
        </ul>
        <Switch>
          <PrivateRoute exact path="/protected" component={Friends} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </StyledDiv>
    </Router>
  );
}

export default App;
