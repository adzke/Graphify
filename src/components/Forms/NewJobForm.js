import React from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

// Date Field
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
  } from '@material-ui/pickers';

 // Dropdown Menus 
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
// Redux Tools
import { 
    newJobFormJobNameChange,
    newJobFormJobValueChange,
    newJobFormJobStatusChange,
    newJobFormJobDateChange,
    newJobFormJobCompanyChange,
    newJobFormJobEmployeeChange,
    newJobFormJobNotesChange,
    
    

} from '../../redux/Actions/newJobForm'
import { useSelector, useDispatch } from 'react-redux'


// Styles
const useStyles = makeStyles((theme) => ({
    formControl: {
    width: '100%',
     
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

function NewJobForm() {
    const dispatch = useDispatch();
    const classes = useStyles();
    const job_name = useSelector(state => state.newJobForm.job_name)
    const project_value = useSelector(state => state.newJobForm.job_value)
    const job_status = useSelector(state => state.newJobForm.job_status)
    const company_name = useSelector(state => state.newJobForm.company_name)
    const employee_name = useSelector(state => state.newJobForm.employee_name)
    const job_notes = useSelector(state => state.newJobForm.job_notes)
    const job_due_date = useSelector(state => state.newJobForm.job_due_date)
    const companies = useSelector(state => state.companies.companies)
    const employees = useSelector(state => state.employees.employees)
    const projectid = useSelector(state => state.dialogs.projectID)
    const projects = useSelector(state => state.jobs.jobs)
    const duedatenull = new Date();
    const projectfiltered = projects.filter((project) => {
        if(project.id === projectid)
        return project
      })
      
    const default_due_date = projectfiltered.map((row) => (
        row.job_due_date
    ));


    const default_company_name = projectfiltered.map((row) => (
        row.company_name
    ));

    const default_employee_name = projectfiltered.map((row) => (
        row.employee_name
    ));

    const default_project_status = projectfiltered.map((row) => (
        row.job_status
    ));

    const default_job_notes = projectfiltered.map((row) => (
        row.job_notes
    ));



    const [jobstate_dueDate, setDueDate] = React.useState((default_due_date != 0) ? default_due_date : duedatenull);
    const [companydefault, setCompanyDefault] = React.useState((default_company_name != 0) ? default_company_name : company_name);
    const [employeedefault, setEmployeeDefault] = React.useState((default_employee_name != 0) ? default_employee_name : employee_name);
    const [projectdefault, setProjectDefault] = React.useState((default_project_status != 0) ? default_project_status : job_status);
    const [notesdefault, setNotesDefault] = React.useState((default_job_notes != 0) ? default_job_notes : job_notes);


    const jobNameChange = (event) => {
        dispatch(newJobFormJobNameChange(event.target.value))
    }

    const jobValueChange = (event) => {
        dispatch(newJobFormJobValueChange(event.target.value))
    }

    const jobStatusChange = (event) => { 
        setProjectDefault()
        dispatch(newJobFormJobStatusChange(event.target.value))
    }

    const jobCompanyChange = (event) => { 
        setCompanyDefault(event.target.value)
        dispatch(newJobFormJobCompanyChange(event.target.value))
    }

    const jobEmployeeChange = (event) => { 
        setEmployeeDefault(event.target.value)
        dispatch(newJobFormJobEmployeeChange(event.target.value))
    }

    const jobNotesChange = (event) => { 
        setNotesDefault()
        dispatch(newJobFormJobNotesChange(event.target.value))
    }

    const loadput = (job, value, status, company, employee, notes, date) => {

        dispatch(newJobFormJobNameChange(job))
        dispatch(newJobFormJobValueChange(value))
        dispatch(newJobFormJobStatusChange(status))
        dispatch(newJobFormJobCompanyChange(company))
        dispatch(newJobFormJobEmployeeChange(employee))
        dispatch(newJobFormJobNotesChange(notes))
        jobDueDateChange(date)

    }


 
    const jobDueDateChange = (date) => {
        setDueDate(date);
        var year = date.getFullYear();
        var month = date.getMonth()+1;
        var dt = date.getDate();

        if (dt < 10) {
            dt = '0' + dt;
          }
          if (month < 10) {
            month = '0' + month;
          }
        
        dispatch(newJobFormJobDateChange(year+'-' + month + '-'+dt))
    }

   

    return (
        <div>
            
            <Grid container spacing={3} style={{margin: 50,}}>

            <Grid item xs={4}>
                    <Typography variant="h6" gutterBottom>
                    Please Enter a Due Date.
                    </Typography>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        
                        fullWidth
                        margin="normal"
                        variant="filled"
                        id="date-picker-dialog"
                        label="Date picker dialog"
                        format="yyyy/MM/dd"
                        value={job_due_date}
                        onChange={jobDueDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                        />
                    
                    </MuiPickersUtilsProvider>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h6" gutterBottom>
                    Please Enter a Project Name.
                    </Typography>
                    <TextField id="filled-basic" label="Project Name" variant="filled" fullWidth onChange={jobNameChange} defaultValue={job_name}/>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h6" gutterBottom>
                    Please Enter a Project Value.
                    </Typography>
                    <TextField id="filled-basic" label="Project Value" variant="filled" onChange={jobValueChange} defaultValue={project_value} />
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h6" gutterBottom>
                    Please Enter a Company Name.
                    </Typography>
                    <FormControl variant="filled" className={classes.formControl}>
                        <InputLabel id="demo-simple-select-filled-label">Select Company</InputLabel>
                        <Select
                        
                       
                        fullWidth
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={company_name}
                        onChange={jobCompanyChange}
                        >
                      {companies.map((company) => (
                        <MenuItem key={company.id} value={company.company_name}>{company.company_name}</MenuItem>
                        ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h6" gutterBottom>
                    Please Enter a Employee Name.
                    </Typography>
                    <FormControl variant="filled" className={classes.formControl}>
                        <InputLabel id="demo-simple-select-filled-label">Select Employee</InputLabel>
                        <Select
                        fullWidth
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={employee_name}
                        onChange={jobEmployeeChange}
                        >
                        {employees.map((employee) => (
                        <MenuItem key={employee.id} value={employee.employee_name}>{employee.employee_name}</MenuItem>
                        ))}
                        </Select>
                    </FormControl>
                </Grid>
             
                <Grid item xs={6}>
                    <Typography variant="h6" gutterBottom>
                    Please Enter a Project Status.
                    </Typography>
                    <FormControl variant="filled" className={classes.formControl}>
                        <InputLabel id="demo-simple-select-filled-label">Select Project Status</InputLabel>
                        <Select
                        fullWidth
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={job_status}
                        onChange={jobStatusChange}
                        >
                        
                        <MenuItem value={'In Progress'}>In Progress</MenuItem>
                        <MenuItem value={'Pending Close'}>Pending Close</MenuItem>
                        <MenuItem value={'Completed'}>Completed</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h6" gutterBottom>
                    Please Enter a Project Notes.
                    </Typography>
                    <TextField
                        defaultValue={job_notes}
                        id="outlined-multiline-static"
                        label="Project Notes..."
                        multiline
                        rows={5}
                        variant="filled"
                        fullWidth
                        onChange={jobNotesChange}
                        />

                        
                </Grid>

                
            </Grid>
            
        </div>
    )
}

export default NewJobForm
