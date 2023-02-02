export default class ApiConstants {
    static MAIN_URL = "http://api.openweathermap.org"

    static API_VERSION = {
      ONE: 'data/2.5',
    };
  
    static GET_WEATHER_API = `${ApiConstants.MAIN_URL}/${ApiConstants.API_VERSION.ONE}`;
  }
  