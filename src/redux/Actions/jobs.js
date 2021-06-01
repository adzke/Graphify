import axios from 'axios';

import { GET_JOBS, ADD_JOB, PUT_JOB, DELETE_JOB } from './types';
import { returnErrors } from './messages';
import { tokenConfig } from './auth';
import { API_URL } from '../Proxy/proxy'
import { newJobFormState, EditJobFormState } from './dialogs'
import { clearform } from './newJobForm'
import { createMessage } from './messages'
// GET JOBS 

export const getJobs = () => (dispatch, getState) =>  {

     axios.get(`${API_URL}/jobs`, tokenConfig(getState)).then( res => {
        dispatch({

            type: GET_JOBS,
            payload: res.data

        });

    }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));}
 
    // POST JOBS
    export const postJobs = (job) => (dispatch, getState) => {
        axios
          .post(`${API_URL}/jobs/`, job, tokenConfig(getState))
          .then((res) => {
            dispatch(createMessage({ postJob: 'Job Added' }));
            dispatch({
              type: ADD_JOB,
              payload: res.data,
            });
            dispatch(getJobs(dispatch, getState));
            dispatch(newJobFormState(false));
            dispatch(clearform())
          })
          .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
      };


      // PUT JOB
    
      export const putJob = (id, job) => (dispatch, getState) => {
  
        axios
          .put(`${API_URL}/jobs/${id}/`, job, tokenConfig(getState))
          .then((res) => {
            dispatch(createMessage({ putJob: 'Job Updated' }));
            dispatch({
              type: PUT_JOB,
              payload: res.data,
            });
            dispatch(getJobs(dispatch, getState));
            dispatch(EditJobFormState(false));
            dispatch(clearform(true))
          })
          .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
      };


       // Delete JOB
    
 export const deleteJob = (id) => (dispatch, getState) => {
  
  axios
    .delete(`${API_URL}/jobs/${id}/`, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ deleteJob: 'Job Deleted' }));
      dispatch({
        type: DELETE_JOB,
        payload: res.data,
      });
      dispatch(getJobs(dispatch, getState));
      dispatch(EditJobFormState(false));
      dispatch(clearform(true))
     
    })
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};