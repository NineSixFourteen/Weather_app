import React from "react";
import { styled } from "nativewind";
import { Text, ScrollView, TouchableOpacity, View } from 'react-native';
import LocWidget from "../Widgets/LocWidget";
const StyledView = styled(View);
const StyledScroll = styled(ScrollView)

const HourlyWeather = (props) => {
    console.log(props.nav.getState().routes[1].params)
    let x = props.nav.getState().routes[1].params;
    return(
        <StyledScroll className="bg-neutral-900">
            <StyledView className="my-5">
            <LocWidget 
                    key={"Monday"} Title={x.title} 
                    Location={x.location} Temperature={27} 
                    Weather={'Cloudy'} Time={"14:00"}
                    Prec={22} Hum={22} Wind={22} 
                />
            <LocWidget 
                    key={"Tue"} Title={"Home"} 
                    Location={"Glasgow"} Temperature={27} 
                    Weather={'Hail'} Time={"15:00"}
                    Prec={22} Hum={22} Wind={22} 
                />
            <LocWidget 
                    key={"Wed"} Title={"Home"} 
                    Location={"Glasgow"} Temperature={20} 
                    Weather={'Windy'} Time={"16:00"}
                    Prec={22} Hum={22} Wind={22} 
                />
            <LocWidget 
                    key={"Thur"} Title={"Home"} 
                    Location={"Glasgow"} Temperature={27} 
                    Weather={'Cloudy'} Time={"17:00"}
                    Prec={22} Hum={22} Wind={22} 
                />
            <LocWidget 
                    key={"Fri"} Title={"Home"} 
                    Location={"Glasgow"} Temperature={27} 
                    Weather={'Cloudy'} Time={"18:00"}
                    Prec={22} Hum={22} Wind={22} 
                />
            <LocWidget 
                    key={"Sat"} Title={"Home"} 
                    Location={"Glasgow"} Temperature={27} 
                    Weather={'Cloudy'} Time={"19:00"}
                    Prec={22} Hum={22} Wind={22} 
                />
            <LocWidget 
                    key={"Sun"} Title={"Home"} 
                    Location={"Glasgow"} Temperature={27} 
                    Weather={'Cloudy'} Time={"20:00"}
                    Prec={22} Hum={22} Wind={22} 
                />
            </StyledView> 
        </StyledScroll>
    )
    
} 
export default HourlyWeather