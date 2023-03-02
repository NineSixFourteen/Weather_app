import React from "react";
import { styled } from "nativewind";
import { Text, View, ScrollView} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SmallLocation from "../Home/SmallLocation";
const StyledView = styled(View);
const StyledText = styled(Text); 
const StyledScroll = styled(ScrollView)

class Dry extends React.Component{

    render(){
        return(
            <StyledView className="flex">
      
                <StyledView className="text-center h-14 justify-center items-center text-white bg-fuchsia-200 rounded">
                    <StyledText> LOL</StyledText>
                </StyledView>
            </StyledView>
        )
    }

} export default Dry