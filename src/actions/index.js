import axios from "axios";
const API_URL = "https://www.pslib.cz/tomas.kazda/api/kurzycnbapi.php";

export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_DATA_FULFILLED = 'FETCH_DATA_FULFILLED';

export const GET_DATE = 'GET_DATE';
export const GET_DATE_FULFILLED = 'GET_DATE_FULFILLED';


export const fetchData = () => {
  const request = axios.get( API_URL, {
  });
  return {
    type: FETCH_DATA,
    payload: request
  }
}

export const getDate = (date) =>{
  const request = axios.get(API_URL,{
    params:{
      date: date
    }
  });

  return{
    type: GET_DATE,
    payload: request
  }
}