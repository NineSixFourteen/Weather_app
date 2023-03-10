import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const WeatherFac = props  => {
    let x;
    switch(props.type){
        case "Sunny":
            x = <MaterialCommunityIcons name="weather-sunny" color={'orange'}  size={props.size} selectionColor/>
            break;
        case "Raining":
            x = <MaterialCommunityIcons name="weather-rainy" color={'rgb(10, 61, 191)'}  size={props.size} selectionColor/>
            break;
        case "Heavy Rain":
            x = <MaterialCommunityIcons name="weather-pouring" color={'rgb(9, 26, 94)'}  size={props.size} selectionColor/>
            break;
        case "Cloudy":
            x = <MaterialCommunityIcons name="weather-cloudy" color={'rgb(235, 202, 178)'}  size={props.size} selectionColor/>
            break;
        case "Lightning":
            x = <MaterialCommunityIcons name="weather-lightning" color={'yellow'}  size={props.size} selectionColor/>
            break;
        case "Hail":
            x = <MaterialCommunityIcons name="weather-hail" color={'rgb(7, 164, 217)'}  size={props.size} selectionColor/>
            break;
        case "Windy":
            x = <MaterialCommunityIcons name="weather-windy" color={'rgb(28, 38, 37)'}  size={props.size} selectionColor/>
            break;
        case "Snow":
            x = <MaterialCommunityIcons name="weather-snowy" color={'white'}  size={props.size} selectionColor/>
            break;
    }
    return x; 
}; 
  
export default WeatherFac;