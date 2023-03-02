import { View, Text } from "react-native"
import { styled } from "nativewind";
import WeatherFac from "./WeatherFactory";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const StyledText = styled(Text); 
const StyledView = styled(View);

const SmallLocation = props  => {
    return (
        <StyledView>
            <StyledText className="text-xl font-bold text-white"> {props.Time}</StyledText>
            <WeatherFac type={props.Weather}/>
        </StyledView>
    )
}; 
  
  export default SmallLocation;