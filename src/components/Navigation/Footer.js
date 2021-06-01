import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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


export default function Footer() {
  const classes = useStyles();
    return (
      <div className={classes.root}>
        <AppBar style={{background: '#6554C0'}} position="static" color="primary">
          <Container maxWidth="md">
            <Toolbar>
            <Typography variant="h6" className={classes.title}>
                    Graphify  © 2021 
              </Typography>
              <Typography variant="body1" color="inherit">
               Designed by AD
              </Typography>
              
                
            </Toolbar>
          </Container>
        </AppBar>
        </div>
    )
}