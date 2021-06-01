
import React from 'react'
import NavBar from './components/Navigation/NarBar'
// Views for Pages
import Dashboard from './components/Views/Dashboard'
import Contacts from './components/Views/Contacts'
import Projects from './components/Views/Projects'

import Container from '@material-ui/core/Container';
import Footer from './components/Navigation/Footer'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getJobs } from './redux/Actions/jobs';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import './App.css';
// React Router DOM
import { 
  BrowserRouter as Router, 
  Switch,
  Route,} 
  from "react-router-dom";
import { getCompanies } from './redux/Actions/companies'
import { getEmployees } from './redux/Actions/employees'
const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Oxygen'
    ].join(','),
  }
});

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getJobs())
    dispatch(getCompanies())
    dispatch(getEmployees())
  }); 

  return (
    <ThemeProvider theme={theme}>
    <div>
    <Router>
      <NavBar/>
      <Container>
      <Switch>
      <Route exact path="/dashboard" component={Dashboard}/>
      <Route exact path="/contacts" component={Contacts}/>
      <Route exact path="/projects" component={Projects}/>
      
      </Switch>
      </Container>
      <Footer/>
    </Router>
    </div>
    </ThemeProvider>
  );
}

export default App;
