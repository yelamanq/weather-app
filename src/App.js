import './App.css';
import { useState, useEffect } from 'react';
import { useFetching } from './hooks/useFetching';
import { useDebounce } from './hooks/useDebounce';
import Header from './components/Header'
import Search from './components/Search';
import WeatherService from './API/WeatherService';
import Weather from './components/Weather';
import Loader from './components/UI/Loader';

function App() {

  const [search, setSearch] = useState('')
  const debouncedQuery = (useDebounce(search, 800) || 'London');
  const [tempUnit, setTempUnit] = useState('C')
  const [forecastInfo, setForecastInfo] = useState()
  const [weatherInfo, setWeatherInfo] = useState()
  const [fetchWeather, isWeatherLoading, error] = useFetching( async () => {
    const weatherResponse = await WeatherService.getCurrentWeather(debouncedQuery);
    const response = await WeatherService.getFiveDayForecast(debouncedQuery);
    setForecastInfo(response.data.list)
    setWeatherInfo(weatherResponse.data)
  })
  
  useEffect(() => {
    fetchWeather()
  }, [debouncedQuery])

  return (
    <div className="App">
      <Header tempUnit={tempUnit} setTempUnit={setTempUnit}/>
      <h1 className='mainText'>Discover The Weather</h1>
      <Search search={search} setSearch={setSearch} />
      {weatherInfo && forecastInfo
        ? <Weather weatherInfo={weatherInfo} tempUnit={tempUnit} forecastInfo={forecastInfo} />
        : <Loader/>
      }
    </div>
  );
}

export default App;
