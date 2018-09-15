import request from "../utils/request";

// const URL = "https://api.openweathermap.org/data/2.5/weather?appid=852b9166267b9f1d0863e75ff52adb3f&q=";

const weather = {
  byCity: {
    single: function(city) {
      const URL =
        "https://crossorig.in/https://samples.openweathermap.org/data/2.5/weather?appid=b6907d289e10d714a6e88b30761fae22&q=";

      return request(URL + city);
    },
    forecast: function(city) {
      const URL =
        "https://crossorig.in/https://samples.openweathermap.org/data/2.5/forecast/daily?q=M%C3%BCnchen,DE&appid=b6907d289e10d714a6e88b30761fae22";

      return request(URL + city);
    },
  },
};

export default weather;
