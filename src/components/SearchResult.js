import React from 'react'
import WeatherInfo from './WeatherInfo'
import ErrorInfo from './ErrorInfo'
import { useSelector } from 'react-redux'

const SearchResult = () => {
  const error = useSelector((store)=>store.weather.error)
  if(error) return <ErrorInfo errorMessage={error}/>
  return (
    <>
      <WeatherInfo/>
    </>
  )
}

export default SearchResult