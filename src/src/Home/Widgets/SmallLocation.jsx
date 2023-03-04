import { View, Text, TouchableOpacity } from "react-native"
import { styled } from "nativewind";
import WeatherFac from "../Util/WeatherFactory";
const StyledText = styled(Text); 
const StyledButton = styled(TouchableOpacity)

const SmallLocation = props  => {
    let func = props.Nav ? () => {props.Nav.navigate('Hourly', {location:"ss", title:"Nice",})} : () => {}
    return (
        <StyledButton onPress={func}>
            <StyledText className="text-xl font-bold text-white"> {props.Time}</StyledText>
            <WeatherFac type={props.Weather} size={50} />
        </StyledButton>
    )
}; 
  
  export default SmallLocation;