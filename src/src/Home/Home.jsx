import React from "react";
import { styled } from "nativewind";
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import LocationWidget from "./LocationWidget";
const StyledView = styled(View,);
const StyledText = styled(Text); 
const StyledScroll = styled(ScrollView)
const StyledButton = styled(TouchableOpacity )

class Home extends React.Component{

    render(){
        return(
            <StyledScroll className="bg-neutral-900 ">
                <StyledText className="text-center bg-stone-700 py-2 text-4xl text-red-400" >Weather </StyledText>
                <LocationWidget Title={"Home"} Location={"Glasgow"} Temperature={"27*"} Prec={"12"} Hum={"22"} Wind={"222"} />
                <StyledButton 
                    className="bg-blue-900 mx-3 my-2" 
                >
                    <StyledText className="text-center text-4xl py-4 text-amber-600"> Add new Location</StyledText>    
                </StyledButton>
            </StyledScroll>
        )
    }

} export default Home