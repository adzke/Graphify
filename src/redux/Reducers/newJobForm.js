import { 
  JOB_NAME_CHANGE_NEW_JOB_FORM, 
  JOB_NEW_JOB_FROM_SUBMITTED,
  JOB_VALUE_CHANGE_NEW_JOB_FORM,
  JOB_STATUS_CHANGE_NEW_JOB_FORM,
  JOB_DATE_CHANGE_NEW_JOB_FORM,
  JOB_COMPANY_CHANGE_NEW_JOB_FORM,
  JOB_EMPLOYEE_CHANGE_NEW_JOB_FORM,
  JOB_NOTES_CHANGE_NEW_JOB_FORM,
  JOB_FORM_CLEAR,

} from '../Actions/types';

const initialState = {
 job_name: '',
 job_value: '',
 job_notes: '',
 job_due_date: null,
 job_status: '',
 company_name: '',
 employee_name: '',


};

export default function (state = initialState, action) {
 switch (action.type) {
   case JOB_NAME_CHANGE_NEW_JOB_FORM:
     return {
       ...state,
       job_name: action.payload,
     };

     case JOB_VALUE_CHANGE_NEW_JOB_FORM:
     return {
       ...state,
       job_value: action.payload,
     };

     case JOB_NEW_JOB_FROM_SUBMITTED:
     return {
       ...state,
       
     };
     case JOB_STATUS_CHANGE_NEW_JOB_FORM:
      return {
        ...state,
        job_status: action.payload,
        
      };

      case JOB_DATE_CHANGE_NEW_JOB_FORM:
      return {
        ...state,
        job_due_date: action.payload,
        
      };

      case JOB_COMPANY_CHANGE_NEW_JOB_FORM:
        return {
          ...state,
          company_name: action.payload,
          
        };

      case JOB_EMPLOYEE_CHANGE_NEW_JOB_FORM:
        return {
          ...state,
          employee_name: action.payload,
          
        };
        case JOB_NOTES_CHANGE_NEW_JOB_FORM:
          return {
            ...state,
            job_notes: action.payload,
            
          };
         case JOB_FORM_CLEAR:
          return {
            ...state,
            job_name: '',
            job_value: '',
            job_notes: '',
            job_due_date: null,
            job_status: '',
            company_name: '',
            employee_name: '',
            
          }; 
    
   default:
     return state;
 }
}