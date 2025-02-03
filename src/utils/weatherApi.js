import { BASE_URL, API_KEY } from "./constants";

export const fetchGeolocation = async (cityName) => {
  const response = await fetch(
    `${BASE_URL}/geo/1.0/direct?q=${cityName}&limit=1&appid=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error(`Geolocation API error: ${response.statusText}`);
  }

  const data = await response.json();
  return data;
};

export const fetchWeatherData = async (lat, lon) => {
  const response = await fetch(
    `${BASE_URL}/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error(`Weather API error: ${response.statusText}`);
  }

  const data = await response.json();
  return data;
};