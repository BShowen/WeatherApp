/**
 * An abstraction for interacting with the OpenWeather api.
 */
export default (function () {
  /**
   * This project will run on GitHub pages. Therefore there will not be a server
   * where I can inject env. vars. This is OKAY because the OpenWeather API is
   * free.
   */
  const API_KEY = "ac76c81fc03b816e49b3d06f76579506";

  /**
   * Returns a promise object with coordinates
   * { lat: n, long: x}
   * On error return the error message.
   */
  async function _getCoords(cityName) {
    let data;
    const geocodeUrl =
      "http://api.openweathermap.org/geo/1.0/direct" +
      `?q=${cityName}&appid=${API_KEY}`;
    try {
      const response = await fetch(geocodeUrl);
      data = await response.json();
    } catch (error) {
      return error.message;
    }
    const { lat, lon } = data[0];
    return { lat, lon };
  }

  /**
   * Get the weather for a given city name. If the city is not found then
   * propagate the error message to the caller.
   */
  async function getWeather(cityName) {
    const { lat, lon } = await _getCoords(cityName);

    const apiUrl =
      "https://api.openweathermap.org/data/2.5/onecall" +
      `?lat=${lat}&lon=${lon}&exclude=minutely` +
      `&units=imperial` +
      `&appid=${API_KEY}`;
    let data;
    try {
      const response = await fetch(apiUrl);
      data = await response.json();
    } catch (error) {
      return error.message;
    }
    return data;
  }

  return { getWeather };
})();
