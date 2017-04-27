import axios from 'axios';

const API_KEY = '4a756b35bdef4da87f0bf4227ac0a859';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?&appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export const fetchWeather = (city) => {
  const url = `${ROOT_URL}&q=${city},us&units=imperial`;

  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
};
