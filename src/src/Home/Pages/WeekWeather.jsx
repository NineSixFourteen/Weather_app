import React from "react";
import { styled } from "nativewind";
import { Text, ScrollView, TouchableOpacity, View } from 'react-native';
import LocWidget from "../Widgets/LocWidget";
const StyledView = styled(View);
const StyledScroll = styled(ScrollView)

const WeekWeather = props => {
    return(
        <StyledScroll className="bg-neutral-900 ">
            <StyledView className="my-5">
            <LocWidget 
                    key={"Monday"} Title={"Home"} 
                    Location={"Glasgow"} Temperature={27} 
                    Weather={'Cloudy'} Time={"Mon"}
                    Prec={22} Hum={22} Wind={22} 
                    Nav={props.nav}
                />
            <LocWidget 
                    key={"Tue"} Title={"Home"} 
                    Location={"Glasgow"} Temperature={27} 
                    Weather={'Hail'} Time={"Tue"}
                    Prec={22} Hum={22} Wind={22} 
                    Nav={props.nav}
                />
            <LocWidget 
                    key={"Wed"} Title={"Home"} 
                    Location={"Glasgow"} Temperature={20} 
                    Weather={'Windy'} Time={"Wed"}
                    Prec={22} Hum={22} Wind={22} 
                    Nav={props.nav}
                />
            <LocWidget 
                    key={"Thur"} Title={"Home"} 
                    Location={"Glasgow"} Temperature={27} 
                    Weather={'Cloudy'} Time={"Thu"}
                    Prec={22} Hum={22} Wind={22} 
                    Nav={props.nav}
                />
            <LocWidget 
                    key={"Fri"} Title={"Home"} 
                    Location={"Glasgow"} Temperature={27} 
                    Weather={'Cloudy'} Time={"Fri"}
                    Prec={22} Hum={22} Wind={22} 
                    Nav={props.nav}
                />
            <LocWidget 
                    key={"Sat"} Title={"Home"} 
                    Location={"Glasgow"} Temperature={27} 
                    Weather={'Cloudy'} Time={"Sat"}
                    Prec={22} Hum={22} Wind={22} 
                    Nav={props.nav}
                />
            <LocWidget 
                    key={"Sun"} Title={"Home"} 
                    Location={"Glasgow"} Temperature={27} 
                    Weather={'Cloudy'} Time={"Sun"}
                    Prec={22} Hum={22} Wind={22} 
                    Nav={props.nav}
                />
            </StyledView> 
        </StyledScroll>
    )
    
} 
export default WeekWeather