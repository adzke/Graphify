import { GET_COMPANIES, OPEN_COMPANY_CREATE_FROM, COMPANY_ID,OPEN_COMPANY_DETAIL_FROM, OPEN_COMPANY_DELETE_FROM } from '../Actions/types';

const initialState = {
  companies: [],
  createopen: false,
  detailopen: false,
  deleteopen: false,

};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_COMPANIES:
      return {
        ...state,
        companies: action.payload,
      };
      case OPEN_COMPANY_CREATE_FROM:
        return {
          ...state,
          createopen: action.payload,
        }; 

      case COMPANY_ID:
        return {
          ...state,
          id: action.payload,
        };

      case OPEN_COMPANY_DETAIL_FROM:
        return {
          ...state,
          detailopen: action.payload,
        };

        case OPEN_COMPANY_DELETE_FROM:
          return {
            ...state,
            deleteopen: action.payload,
          };  
    default:
      return state;
  }
}