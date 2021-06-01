
import { OPEN_NEW_JOB_FORM, OPEN_EDIT_JOB_FORM, SET_PROJECT_ID, CLEAR_PROJECT_ID, SET_FORM_DATA } from './types';

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

// Set Dialog state for NEW_JOB_FORM to value

export const newJobFormState = (stateofform) => {

    return {
      type: OPEN_NEW_JOB_FORM,
      payload: stateofform,
    };
  };


export const EditJobFormState = (stateofform) => {

    return {
      type: OPEN_EDIT_JOB_FORM,
      payload: stateofform,
    };
  };

  export const ProjectID = (id) => {

    return {
      type: SET_PROJECT_ID,
      payload: id,
    };
  };


  export const ClearProjectID = () => {

    return {
      type: CLEAR_PROJECT_ID,
      payload: null,
    };
  };


  export const SetFormStateData = () => (dispatch, getState) => {

    const projectid = getState().dialogs.projectID
    const projects = getState().jobs.jobs
    const projectfiltered = projects.filter((project) => {
      if(project.id === projectid)
      return project
    })


  const default_job_name = projectfiltered.map((row) => (
      row.job_name
  ));

  const default_due_date = projectfiltered.map((row) => (
      row.job_due_date
  ));

  const default_project_value = projectfiltered.map((row) => (
      row.job_value
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

  dispatch(newJobFormJobNameChange(default_job_name.pop()))
  dispatch(newJobFormJobValueChange(default_project_value.pop()))
  dispatch(newJobFormJobStatusChange(default_project_status.pop()))
  dispatch(newJobFormJobDateChange(default_due_date.pop()))
  dispatch(newJobFormJobCompanyChange(default_company_name.pop()))
  dispatch(newJobFormJobEmployeeChange(default_employee_name.pop()))
  dispatch(newJobFormJobNotesChange(default_job_notes.pop()))


  
  
  





    return {
      type: SET_FORM_DATA,
      payload: null,
    };
  };


  

  