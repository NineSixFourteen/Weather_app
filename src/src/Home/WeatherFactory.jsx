import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const WeatherFac = props  => {
    let x;
    switch(props.type){
        case "Sunny":
            x = <MaterialCommunityIcons name="weather-sunny" color={'orange'}  size={50} selectionColor/>
            break;
        case "Raining":
            x = <MaterialCommunityIcons name="weather-rainy" color={'rgb(10, 61, 191)'}  size={50} selectionColor/>
            break;
        case "Heavy Rain":
            x = <MaterialCommunityIcons name="weather-pouring" color={'rgb(9, 26, 94)'}  size={50} selectionColor/>
            break;
        case "Cloudy":
            x = <MaterialCommunityIcons name="weather-cloudy" color={'rgb(235, 202, 178)'}  size={50} selectionColor/>
            break;
        case "Lightning":
            x = <MaterialCommunityIcons name="weather-lightning" color={'yellow'}  size={50} selectionColor/>
            break;
        case "Hail":
            x = <MaterialCommunityIcons name="weather-hail" color={'rgb(7, 164, 217)'}  size={50} selectionColor/>
            break;
        case "Windy":
            x = <MaterialCommunityIcons name="weather-windy" color={'rgb(28, 38, 37)'}  size={50} selectionColor/>
            break;
        case "Snow":
            x = <MaterialCommunityIcons name="weather-snowy" color={'white'}  size={50} selectionColor/>
            break;
    }
    return x; 
}; 
  
export default WeatherFac;