
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import LocWidget from '../Widgets/LocWidget';

const LoadWid = props => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const extractData = (json) => {
        return {Title:props.Title, Name:"Glasgow", Temperature:22, Weather:"Cloudy", Time:"9:00", Prec:22, Hum:22, Wind:222};
    }

    const getMovies = async () => {
      try {
        const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=55.87&longitude=-4.26&hourly=temperature_2m,apparent_temperature,precipitation,rain,showers,snowfall,windspeed_80m,temperature_80m');
        const json = await response.json();
        const data = extractData(json);
        setData(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
  
    useEffect(() => {
      getMovies();
    }, []);
  
    return (
      <View>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
            <LocWidget 
                key={data.Title} Title={data.Title} 
                Location={data.Name} Temperature={data.Temperature} 
                Weather={data.Weather} Time={data.Time}
                Prec={data.Prec} Hum={data.Hum} Wind={data.Wind} 
                Nav={props.nav}
            />
        )}
      </View>
    );
  };
  
  export default LoadWid;