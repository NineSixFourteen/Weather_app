import React from "react";
import { styled } from "nativewind";
import { Text, View, TouchableOpacity} from 'react-native';
import WeatherFac from "../Util/WeatherFactory";
const StyledView = styled(View);
const StyledText = styled(Text); 
const StyledButton = styled(TouchableOpacity)

const LocationSmallWidget = props  => {
        let title = props.Title ? props.Title : props.Location;
        if(title.length > 7){
            title = title.substring(0,7) + "..";
        } else {
            let spaces = 9 - title.length; 
            for(let i = 0; i < spaces;i++){
                title += " ";
            }
        }
        return(
            <StyledButton className="my-2 py-1 mx-3 px-1 content-center bg-sky-700 rounded flex-row" onPress={() => {props.Func()}}>
                <StyledView className="flex-1 mx-1 my-2">
                    <StyledText  className="text-2xl font-bold tracking-tight text-stone-300 dark:text-white flex-3">{props.Time}</StyledText>
                </StyledView> 
                <StyledView className="flex-2 mx-1 my-2">
                    <StyledText className="text-4xl text-white font-bold tracking-tigh">{title} </StyledText>
                </StyledView>                    
                <StyledView className="flex-2  my-2">
                    <StyledText className={ "text-4xl text-white"}>{props.Temperature + "°C"}</StyledText>
                </StyledView>
                <StyledView className="flex-3 mx-2 my-1">
                    <WeatherFac type={props.Weather} size={50} />
                </StyledView>
            </StyledButton  >
        )
    }
export default LocationSmallWidget