import React from "react";
import styles from "../styles/WeatherInfo.module.css";
import { useSelector } from "react-redux";
import useOnSearch from "../hooks/useOnSearch";
import { daydate, kelvinToCelsius } from "../utils/helperFunctions";
import { ICON_BASE_URL } from "../utils/constants";

const WeatherInfo = () => {
    const cityName = useSelector((store) => store.weather.cityName);
    useOnSearch(cityName)
    const weatherData = useSelector((store) => store.weather.weatherData);
    const iconUrl = weatherData?.weather?.[0]?.icon 
    ? `${ICON_BASE_URL}/${weatherData.weather[0].icon}@2x.png`
    : null;
    const date = daydate();
    return (
        <div className={styles.weatherInfo}>
            <div className={styles.weatherCard}>
                <div className={styles.cardHeader}>
                    <div>
                        <h2 style={{marginBottom:"0px"}}>{cityName}</h2>
                        <p style={{marginTop:"0px"}}>{weatherData?.weather[0]?.description}</p>
                    </div>
                    <div>
                    {
                        iconUrl && (
                            <img 
                              src={iconUrl}
                              alt={weatherData.weather[0].description || "Weather Icon"}
                            />
                        )
                    }
                    </div>
                </div>
                <div className={styles.cardBody}>
                   <div>
                        <h2>{kelvinToCelsius(weatherData?.main?.temp)}°C</h2>
                        <p>{date}</p>
                   </div>
                   <div>
                       <p>Humidity : {weatherData?.main?.humidity}</p>
                       <p>Wind : {weatherData?.wind?.speed}m/s</p> 
                       <p>Pressure : {weatherData?.main?.pressure}hPa</p>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default WeatherInfo;