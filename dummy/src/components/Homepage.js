
import React,{useEffect,useState} from 'react'
import Header from './Header'
import  axios from 'axios';


//import { useSelector } from 'react-redux';



const Homepage = () => {
  
  
  
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('London'); 
  const [country, setCountry] = useState('uk'); 
  // Set default city or allow users to input city

  useEffect(() => {
    fetchWeatherData();
    }, []);
  const fetchWeatherData = async () => {
    try {
      const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
      const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}`
      );
      setWeatherData(response.data.main)
      console.log(response.data.main)

    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };
  if(!weatherData)
  return;


  return (
    <div>
      <Header/>
      <div className=' pl-3'>
      <h2 className="text-2xl font-semibold  mt-5 ">Weather Information</h2>
      <label>City: </label>
      <input className="py-2 px-3 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter city name" type="text" value={city} onChange={(e) => setCity(e.target.value)} />
       <label className=' ml-2 mr-2'>Country:</label>   
      <input type="text" className="py-2 px-3 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter country name" value={country} onChange={(e) => setCountry(e.target.value)} />
       <button className=' bg-purple-500 text-black p-2 m-2 rounded-lg ' onClick={fetchWeatherData}>Submit</button>
      {
        <div>
          <p className="text-lg mb-2 font-bold ">Temperature: {weatherData.temp} °C</p>
          <p className="text-lg mb-2 font-bold">Humidity: {weatherData.humidity}</p>
          <p className="text-lg mb-2 font-bold">temp_max: {weatherData.temp_max}</p>
          <p className="text-lg mb-2 font-bold">temp_min: {weatherData.temp_min}</p>
          <p className="text-lg mb-2 font-bold">temp_min: {weatherData.temp_min}</p>
          <p className="text-lg mb-2 font-bold">pressure: {weatherData.pressure}</p>
        </div>
      }
      </div>
    </div>
  );
    
  
}

export default Homepage