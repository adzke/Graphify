import { 
    SEARCH_PROJECTS,
    
} from '../Actions/types';


const initialState = {
    search_projects: '',
   };
   
export default function (state = initialState, action) {
 switch (action.type) {
   case SEARCH_PROJECTS:
     return {
       ...state,
       search_projects: action.payload,
     };
    
   default:
     return state;
 }
}