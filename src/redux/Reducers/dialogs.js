import { 
  OPEN_NEW_JOB_FORM,
  OPEN_EDIT_JOB_FORM,
  SET_PROJECT_ID,
  CLEAR_PROJECT_ID,
  SET_FORM_DATA
} from '../Actions/types';

const initialState = {
 newjobformstate: false,
 editjobfromstate: false,
 projectID: null,
};

export default function (state = initialState, action) {
 switch (action.type) {
   case OPEN_NEW_JOB_FORM:
     return {
       ...state,
       newjobformstate: action.payload,
     };

    case OPEN_EDIT_JOB_FORM:
     return {
       ...state,
       editjobfromstate: action.payload,
     };

     case SET_PROJECT_ID:
     return {
       ...state,
       projectID: action.payload,
     };

     case CLEAR_PROJECT_ID:
      return {
        ...state,
        projectID: action.payload,
      };

      case SET_FORM_DATA:
      return {
        ...state,
        
      };
    
   default:
     return state;
 }
}