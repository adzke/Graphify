import { combineReducers } from 'redux';
import auth from './auth'
import jobs from './jobs'
import dialogs from './dialogs'
import newJobForm from './newJobForm'
import companies from './companies'
import employees from './employees'
import search from './search'
import messages from './messages'

export default combineReducers({
    auth,
    jobs,
    dialogs,
    newJobForm,
    companies,
    employees,
    search,
    messages,
});