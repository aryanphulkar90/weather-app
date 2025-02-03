import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux'
import { setCityName, setWeatherData, setError } from '../utils/weatherSlice'
import { fetchGeolocation, fetchWeatherData } from '../utils/weatherApi';

const useOnSearch = (cityName) => {
    const dispatch = useDispatch();
    const pollingInterval = useRef(null);
    const validateGeoData = (geoData) => {
        if (!geoData || geoData.length === 0) {
            throw new Error('Location(City) which you have given is invalid.');
        }
        if (!geoData[0].lat || !geoData[0].lon) {
            throw new Error('Invalid Coordinates received from Geo Coder API');
        }
    };

    const validateWeatherData = (weatherData) => {
        if (!weatherData.main || !weatherData.weather) {
            throw new Error('Invalid weather response format from API');
        }
    };
    
    const clearPolling = () => {
        if (pollingInterval.current) {
            clearInterval(pollingInterval.current);
            pollingInterval.current = null;
        }
    };

    const fetchWeatherDetails = async() => {        
            try {
                dispatch(setCityName(cityName))
                if (cityName.trim() === "" || !cityName) {
                   throw new Error('Please enter a City Name');
                }

                const geoData = await fetchGeolocation(cityName);
                validateGeoData(geoData);

                const weatherData = await fetchWeatherData(
                    geoData[0].lat,
                    geoData[0].lon
                );
                validateWeatherData(weatherData);
                    
                dispatch(setWeatherData(weatherData))
                dispatch(setError(null));
                localStorage.setItem('lastCity', cityName);
            }     
            catch (err) {
                clearPolling()
                dispatch(setError(
                    err.message || 'Failed to fetch weather data'
                ));
                localStorage.removeItem('lastCity');
            }
    }

    useEffect(()=>{
       if(cityName != null) {
        fetchWeatherDetails()
        
        pollingInterval.current = setInterval(() => {
           fetchWeatherDetails();
        }, 30000);
       }

       return () => {
        clearPolling()
       }
    },[cityName])
};

export default useOnSearch;
