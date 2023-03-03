import React from "react";
import { styled } from "nativewind";
import { Text} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Weathers from "./Weather";
import WeekWeather from "./WeekWeather";
import HourlyWeather from "./HourlyWeather";
const StyledText = styled(Text); 

const WeatherPage = () => {
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
    return(
        <Weathers list={["Glasgow", "Edinburgh","London"]} nav={props.navigation}/>
    )
}

const WeekHelp = props => {
    return(
        <WeekWeather nav={props.navigation}/>
    )
}

const HourlyHelp = props => {
    return(
        <HourlyWeather nav={props.HourlyWeather}/>
    )
}