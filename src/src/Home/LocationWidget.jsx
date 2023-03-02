import React from "react";
import { styled } from "nativewind";
import { Text, View, ScrollView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SmallLocation from "./SmallLocation";
const StyledView = styled(View);
const StyledText = styled(Text); 
const StyledScroll = styled(ScrollView)

const LocationWidget = props  => {
        let tilte = props.Title == undefined ? props.Location : props.Title + ": " + props.Location 
        return(
            <StyledView className="my-5 mx-3 text-center items-center  bg-sky-700 rounded">
            <StyledText className="my-1 text-4xl font-bold tracking-tight text-white dark:text-white"> {tilte} </StyledText>
            <StyledView className="flex-row ">
                <StyledView className="">
                    <StyledText className="text-6xl text-white my-8">{props.Temperature}</StyledText>
                </StyledView>
                <StyledView>
                    <MaterialCommunityIcons name="weather-cloudy" color={'white'}  size={120} selectionColor/>
                </StyledView>
                <StyledView className="flex-col my-5">
                    <StyledText className="text-xl font-bold text-white">Precipitation:{props.Prec}%</StyledText>
                    <StyledText className="text-xl font-bold text-white">Humidity:{props.Hum}%</StyledText>
                    <StyledText className="text-xl font-bold text-white">Wind:{props.Wind}mph</StyledText>
                </StyledView>
            </StyledView>
            <StyledScroll horizontal={true} className="px-1 flex-row space-x-2"> 
                <SmallLocation Weather={"Sunny"} Time={"8:00"}/>
                <SmallLocation Weather={"Raining"} Time={"9:00"}/>
                <SmallLocation Weather={"Heavy Rain"} Time={"10:00"}/>
                <SmallLocation Weather={"Cloudy"} Time={"11:00"}/>
                <SmallLocation Weather={"Lightning"} Time={"12:00"}/>
                <SmallLocation Weather={"Hail"} Time={"13:00"}/>
                <SmallLocation Weather={"Windy"} Time={"14:00"}/>
                <SmallLocation Weather={"Snow"} Time={"15:00"}/>
                <SmallLocation Weather={"Windy"} Time={"16:00"}/>
                <SmallLocation Weather={"Windy"} Time={"17:00"}/>
                <SmallLocation Weather={"Windy"} Time={"18:00"}/>
                <StyledText> </StyledText>
            </StyledScroll>
        </StyledView>
        )
    }
export default LocationWidget