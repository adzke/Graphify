
import { 
  JOB_NAME_CHANGE_NEW_JOB_FORM,
  JOB_VALUE_CHANGE_NEW_JOB_FORM,
  JOB_NEW_JOB_FROM_SUBMITTED,
  JOB_STATUS_CHANGE_NEW_JOB_FORM,
  JOB_DATE_CHANGE_NEW_JOB_FORM,
  JOB_COMPANY_CHANGE_NEW_JOB_FORM,
  JOB_EMPLOYEE_CHANGE_NEW_JOB_FORM,
  JOB_NOTES_CHANGE_NEW_JOB_FORM,
  JOB_FORM_CLEAR,


 } from './types';

import { postJobs, putJob } from './jobs'

// Set Dialog state for NEW_JOB_FORM to value

export const newJobFormJobNameChange = (formchange) => {

    return {
      type: JOB_NAME_CHANGE_NEW_JOB_FORM,
      payload: formchange,
    };
  };

export const newJobFormJobValueChange = (formchange) => {

    return {
      type: JOB_VALUE_CHANGE_NEW_JOB_FORM,
      payload: formchange,
    };
  };

  export const newJobFormJobStatusChange = (formchange) => {

    return {
      type: JOB_STATUS_CHANGE_NEW_JOB_FORM,
      payload: formchange,
    };
  };


  export const newJobFormJobDateChange = (formchange) => {

    return {
      type: JOB_DATE_CHANGE_NEW_JOB_FORM,
      payload: formchange,
    };
  };

  export const newJobFormJobCompanyChange = (formchange) => {

    return {
      type: JOB_COMPANY_CHANGE_NEW_JOB_FORM,
      payload: formchange,
    };
  };
  
  export const newJobFormJobEmployeeChange = (formchange) => {

    return {
      type: JOB_EMPLOYEE_CHANGE_NEW_JOB_FORM,
      payload: formchange,
    };
  };

  export const newJobFormJobNotesChange = (formchange) => {

    return {
      type: JOB_NOTES_CHANGE_NEW_JOB_FORM,
      payload: formchange,
    };
  };

  export const clearform = (formclean) => {

    return {
      type: JOB_FORM_CLEAR,
      payload: formclean,
    };
  };

 



  




  
// Handle Submit 

export const newJobFormHandleSubmit = () => (dispatch, getState) => {
  // Get Data from State
  const job_name = getState().newJobForm.job_name
  const job_value = getState().newJobForm.job_value
  const job_status = getState().newJobForm.job_status
  const job_due_date = getState().newJobForm.job_due_date
  const company_name = getState().newJobForm.company_name
  const employee_name = getState().newJobForm.employee_name
  const job_notes = getState().newJobForm.job_notes

  // Append Data in FormDate() 
  const data = new FormData() 
  data.append('job_name', job_name)
  data.append('job_value', job_value)
  data.append('job_status', job_status)
  data.append('job_due_date', job_due_date)
  data.append('company_name', company_name)
  data.append('employee_name', employee_name)
  data.append('job_notes', job_notes)

  // POST
  dispatch(postJobs(data));

  return {
    type: JOB_NEW_JOB_FROM_SUBMITTED,
    payload: job_name,
  };
};


// Handle PUT 

export const newJobFormHandlePUT = () => (dispatch, getState) => {
  // Get Data from State
  const job_name = getState().newJobForm.job_name
  const job_value = getState().newJobForm.job_value
  const job_status = getState().newJobForm.job_status
  const job_due_date = getState().newJobForm.job_due_date
  const company_name = getState().newJobForm.company_name
  const employee_name = getState().newJobForm.employee_name
  const job_notes = getState().newJobForm.job_notes
  const projectID = getState().dialogs.projectID
  // Append Data in FormDate() 
  const data = new FormData() 
  data.append('job_name', job_name)
  data.append('job_value', job_value)
  data.append('job_status', job_status)
  data.append('job_due_date', job_due_date)
  data.append('company_name', company_name)
  data.append('employee_name', employee_name)
  data.append('job_notes', job_notes)

  // POST
  dispatch(putJob(projectID, data));
  
  return {
    type: JOB_NEW_JOB_FROM_SUBMITTED,
    payload: job_name,
  };
};
  
  


