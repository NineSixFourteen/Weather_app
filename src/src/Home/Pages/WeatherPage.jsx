import React, {useEffect, useState} from 'react';
import { styled } from "nativewind";
import { Text, ActivityIndicator} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Weathers from "./Weather";
import WeekWeather from "./WeekWeather";
import HourlyWeather from "./HourlyWeather";
import AsyncStorage from '@react-native-async-storage/async-storage';
const StyledText = styled(Text); 

const WeatherPage = () => {
        _retrieveData = async () => {
            try {
                const value = await AsyncStorage.getItem('Locations');
                if (value !== null) {
                    console.log(value);
                } else {
                    console.log("PeePee")
                }
            } catch (error) {
            }
        };

        useEffect(() => {
            _retrieveData();
        }, []);
 
        const SettingsStack = createNativeStackNavigator();
        return(
            <SettingsStack.Navigator>
                <SettingsStack.Screen name="Home" component={WeatherHelp} 
                options={{
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: 'rgb(68,64,60)',
                      },
                    headerTitle: () => <StyledText className=" text-4xl text-red-400" >Weather </StyledText>,
                  }} />
                <SettingsStack.Screen name="Week" component={WeekHelp} 
                    options={{
                        headerTitleAlign: 'center',
                        headerStyle: {
                            backgroundColor: 'rgb(68,64,60)',
                        },
                        headerTitle: () => <StyledText className=" text-4xl text-red-400" > Week Overview</StyledText>,
                    }}/>
                <SettingsStack.Screen name="Hourly" component={HourlyHelp} 
                    options={{
                        headerTitleAlign: 'center',
                        headerStyle: {
                            backgroundColor: 'rgb(68,64,60)',
                        },
                        headerTitle: () => <StyledText className=" text-4xl text-red-400" > Hourly Overview</StyledText>,
                    }}/>
            </SettingsStack.Navigator>
            
        )
    }
    export default WeatherPage

const WeatherHelp = props => { 
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    _retrieveData = async () => {
        try {
            const value = await AsyncStorage.getItem('Locations');
            if (value !== null) {
                setLoading(false);
                setData(value.split(", ")) 
                console.log(value)
            } else {
                console.log("PeePee")
            }
            } catch (error) { 
            }
    };

    useEffect(() => {
        _retrieveData();
    }, []);

    return(
        isLoading ? <ActivityIndicator /> :  <Weathers list={data} nav={props.navigation}/>  
    )
}

const WeekHelp = props => {
    return(
        <WeekWeather nav={props.navigation}/>
    )
}

const HourlyHelp = props => {
    return(
        <HourlyWeather nav={props.navigation}/>
    )
}