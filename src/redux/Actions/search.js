import { 
   SEARCH_PROJECTS
  } from './types';




export const searchProjects = (searchresult) => {

    return {
      type: SEARCH_PROJECTS,
      payload: searchresult,
    };
  };