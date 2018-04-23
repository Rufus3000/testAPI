import {FETCH_DATA_FULFILLED, GET_DATE_FULFILLED, FETCH_DATA, GET_DATE} from '../actions'



const processReducer = (state, action) => {
  switch (action.type) {
    case FETCH_DATA:
    {
      console.log('funguju');
      return state
    }
    case FETCH_DATA_FULFILLED:
    {
      console.log(action.payload.data);
      return {
        ...state,
        date: action.payload.data.date,
        items: action.payload.data.items
      }
    }
    case GET_DATE_FULFILLED:
    {
      console.log(action.payload.date);
      return{
        ...state,
        date: action.payload.data.date,
        items: action.payload.data.items
      };
    }

    
    default:
      return state
  }
}

export default processReducer
