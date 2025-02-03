import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
    name: "weather",
    initialState: {
        cityName: localStorage.getItem('lastCity') || "", 
        weatherData : null,
        error: null
    },
    reducers: {
        setCityName : (state, action) => {
            state.cityName = action.payload
        },
        setWeatherData : (state, action) => {
            state.weatherData = action.payload
        },
        setError : (state,action) => {
            state.error = action.payload
        }
    }
})

export const { setCityName, setWeatherData, setError } = weatherSlice.actions

export default weatherSlice.reducer