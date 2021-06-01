import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
// React Router DOM
import { 
  Link,} 
  from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingLeft: 0,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    paddingLeft: 0,
    marginLeft: 0,
  },
  appbarcolor: {

    background: '#6554C0',


    
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbarcolor}>
          <Container>
        <Toolbar style={{paddingLeft: 0,}}>
        
          <Typography variant="h5" className={classes.title}>
            Graphify 
          </Typography>
          <Link to='/dashboard' style={{color: 'white'}}><Button color="inherit">Dashboard</Button></Link>
          <Link to='/projects' style={{color: 'white'}}><Button color="inherit">Projects</Button></Link>
          <Link to='/contacts' style={{color: 'white'}}><Button color="inherit">Contacts</Button></Link>
        </Toolbar>
        </Container>
      </AppBar>     
  </div>
  );
}