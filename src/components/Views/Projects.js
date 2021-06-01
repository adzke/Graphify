import React from 'react'
import ProjectsTable from '../Tables/Projectstable'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
      width: '100%',
      maxWidth: 500,
    },
    headerpadding: {
        paddingTop: 24,
        paddingBottom: 24,
        paddingLeft: 12,
    }
  });




function Projects() {
    const classes = useStyles();
    return (
        <div>
            <Grid container spacing={3}>
                <Grid className={classes.headerpadding}>
                    <Typography variant="h6" gutterBottom>
                    Projects 
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom>
                    Project status and Breakdown.
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                 <ProjectsTable/>
                </Grid>
               
                
                
            </Grid>
        </div>
    )
}

export default Projects
