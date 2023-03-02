import React from "react";
import { styled } from "nativewind";
import { Text, View, ScrollView, TouchableOpacity} from 'react-native';
import SmallLocation from "./SmallLocation";
import WeatherFac from "./WeatherFactory";
const StyledView = styled(View);
const StyledText = styled(Text); 
const StyledScroll = styled(ScrollView)
const StyledButton = styled(TouchableOpacity)

const LocationWidget = props  => {
        let title = props.Title == undefined ? props.Location : props.Title + ": " + props.Location 
        title = props.Title != undefined && props.Title.length >= 7 ? props.Title : title;  
        if(title.length > 10 ){
            title = title.substring(0,10) + ".."
        }
        let style = "text-5xl my-4 text-white";
        return(
            <StyledView className="my-2 mx-3 text-center  bg-sky-700 rounded">
                <StyledButton className="flex-row row-span-2 place-items-stretch" onPress={() => {props.Func()}}>
                    <StyledText className="my-1 text-5xl font-bold tracking-tight text-white dark:text-white flex-1"> {title}</StyledText>
                    <StyledText  className="my-1 text-4xl font-bold tracking-tight text-stone-300 dark:text-white flex-3">{props.Time} </StyledText>
                </StyledButton>
            <StyledView className="flex-row">
                <StyledView className="m-0 p-0 flex-1" >
                <WeatherFac type={props.Weather} size={110} />
                </StyledView>
                <StyledView className="flex-2 my-4">
                    <StyledText className={style}>{props.Temperature + "°C"}</StyledText>
                </StyledView>
                <StyledView className="flex-col my-2 flex-3" >
                    <StyledText className="text-xl font-bold text-stone-300"> Precipitation:{props.Prec}%</StyledText>
                    <StyledText className="text-xl font-bold text-stone-300"> Humidity:{props.Hum}%</StyledText>
                    <StyledText className="text-xl font-bold text-stone-300"> Wind:{props.Wind}mph</StyledText>
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