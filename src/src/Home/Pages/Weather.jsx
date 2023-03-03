import React from "react";
import { styled } from "nativewind";
import { Text, ScrollView, TouchableOpacity, View } from 'react-native';
import LocWidget from "../Widgets/LocWidget";
const StyledView = styled(View);
const StyledText = styled(Text); 
const StyledScroll = styled(ScrollView)
const StyledButton = styled(TouchableOpacity )

const Weathers = props => {
    let data = [
        {Name: "Glasgow", Title:"Home", Temperature:37, Prec:12, Hum:22, Wind:222, Weather:"Raining", Time:"12:45"},
        {Name: "Edinburgh", Temperature:40, Prec:22, Hum:12, Wind:22, Weather:"Sunny", Time:"12:45"},
        {Name: "London", Title:"Parents", Temperature:30, Prec:12, Hum:22, Wind:22, Weather:"Lightning", Time:"12:45"},
    ]
    let bod = [];
    props.list.forEach(element => {
        data.forEach(location => {
            if(element == location.Name){
                bod.push(<LocWidget 
                    key={location.Title} Title={location.Title} 
                    Location={location.Name} Temperature={location.Temperature} 
                    Weather={location.Weather} Time={location.Time}
                    Prec={location.Prec} Hum={location.Hum} Wind={location.Wind} 
                    Nav={props.nav}
                />)
            }
        })
    });
    return(
        <StyledScroll className="bg-neutral-900 ">
            <StyledView className="my-5">
                {bod}
                <StyledButton 
                    className="bg-blue-900 mx-3 my-4" 
                >
                    <StyledText className="text-center text-4xl py-4 text-amber-600"> Add new Location</StyledText>    
                </StyledButton>
            </StyledView> 
        </StyledScroll>
    )
    
} 
export default Weathers