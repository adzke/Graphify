import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import DashboardTable from '../Tables/Dashboardtable'
import Grid from '@material-ui/core/Grid';
import LineChart from '../Charts/LineChart'
import { useSelector, useDispatch } from 'react-redux'
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import NewJobDialog from '../Dialogs/NewJobDialog'
import EditJobDialog from '../Dialogs/EditJobDialog'
import Search from '../Search/Search'
// Redux Functions Dispatch
import { deleteJob} from '../../redux/Actions/jobs'
import { newJobFormHandleSubmit, clearform, newJobFormHandlePUT } from '../../redux/Actions/newJobForm'
import { searchProjects } from '../../redux/Actions/search'
import  { newJobFormState, EditJobFormState, ClearProjectID }  from '../../redux/Actions/dialogs'
const useStyles = makeStyles({
    root: {
      width: '100%',
      maxWidth: 500,
    },
    headerpadding: {
        paddingTop: 24,
        paddingBottom: 24,
       
    }
  });

  

function Dashboard() {
    // React Redux State    
    const open = useSelector(state => state.dialogs.newjobformstate)
    const openedit = useSelector(state => state.dialogs.editjobfromstate)
    const project_id = useSelector(state => state.dialogs.projectID)
    const search_projects = useSelector(state => state.search.search_projects)
    const dispatch = useDispatch()

    const handleClickOpen = () => {
        dispatch(newJobFormState(true))
      };
    
    const handleClose = () => {
       
        dispatch(newJobFormState(false))
      };
    const handleEditOpen = () => {
        dispatch(EditJobFormState(true))
      };
      
    const handleEditClose = () => {
        dispatch(EditJobFormState(false))
        dispatch(ClearProjectID())
        dispatch(clearform(true))
      };

    const handleSearchProjects = (event) => {
        dispatch(searchProjects(event.target.value))
      };

    const projects = useSelector(state => state.jobs.jobs)
    const classes = useStyles();
    const formsubmitted = (event) => {
        dispatch(newJobFormHandleSubmit(event))
    }
    const editformsubmitted = (event) => {
      dispatch(newJobFormHandlePUT(event))
    }
    const editformdelete = () => {
      dispatch(deleteJob(project_id))
    }
   
    return (
        <div> 
           <NewJobDialog
           handleClose={handleClose}
           handleClickOpen={handleClickOpen}
           handleFormSubmit={formsubmitted}
           open={open}
           />

            <EditJobDialog
            handleClickOpen={handleEditOpen}
            handleClose={handleEditClose}
            handleFormSubmit={editformsubmitted}
            handleDelete={editformdelete}
            open={openedit}
            />
            <Grid container spacing={3} className={classes.headerpadding}  >
                <Grid item xs={6}>
                    <Typography variant="h6" gutterBottom>
                    Good Morning.
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom>
                    Here is the breakdown for today.
                    </Typography>
                   
                </Grid>
                <Grid item xs={6}
                
                style={{ display: "flex", 
                justifyContent: "flex-end",
                alignItems: "center" }}
                >
                   <Search value={search_projects} searchresults={handleSearchProjects}/>
                   
                    <IconButton onClick={handleClickOpen}>
                    <AddIcon fontSize='large'/>
                    </IconButton>
                  
                </Grid>
                <Grid item xs={12}>
                 <DashboardTable/>
                </Grid>
                <Grid item xs={8} style={{marginTop: 50, marginBottom: 50, }}>
                    <LineChart projects={projects} />
                </Grid>
                <Grid item xs={4} style={{marginTop: 60}}>
                <Typography variant="h5" gutterBottom>
                    Breakdown
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                   Total Projects: {projects.length}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                   Profit: $2500
                    </Typography>
                    
                </Grid>
                
            </Grid>
        </div>
    )
}

export default Dashboard
