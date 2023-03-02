import React from "react";
import { styled } from "nativewind";
import { Text, View } from 'react-native';
const StyledView = styled(View, 'flex-1 items-center justify-center');
const StyledText = styled(Text); 

class Settings extends React.Component{

    render(){
        return(
            <StyledView>
                <StyledText>Dryingd</StyledText>
            </StyledView>
        )
    }

} export default Settings