import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import NewJobForm from '../Forms/NewJobForm'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
    background: '#6554C0',

  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },

}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function EditJobDialog(props) {
  const classes = useStyles();




  return (
    
    
      <Dialog fullScreen open={props.open} onClose={props.handleClose} TransitionComponent={Transition}>
        
        <AppBar className={classes.appBar}>
        <Container>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={props.handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Edit Project
            </Typography>
            <Button autoFocus color="inherit" onClick={props.handleDelete} style={{background: '#FF453A', margin: 20,}} >
              Delete
            </Button>
            <Button autoFocus color="inherit" onClick={props.handleFormSubmit} style={{background: '#32E82A'}}>
              save
            </Button>
          </Toolbar>
          </Container>
        </AppBar>
        <Container>
        <NewJobForm
        
        
        
        
        />
        </Container>
      </Dialog>
    
  );
}
