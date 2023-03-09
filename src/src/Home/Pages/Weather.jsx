import React, {useState, useEffect} from "react";
import { styled } from "nativewind";
import { Text, ScrollView, TouchableOpacity, View } from 'react-native';
import LocWidget from "../Widgets/LocWidget";
import Dialog from "react-native-dialog";
import LoadWid from "../Util/LoadWid";
import AsyncStorage from "@react-native-async-storage/async-storage";
const StyledView = styled(View);
const StyledText = styled(Text); 
const StyledScroll = styled(ScrollView)
const StyledButton = styled(TouchableOpacity )

const Weathers = props => {
    const [show, setShow] = useState(false);
    const [text, setText] = useState("");

    const convert = (list) => {
        let bod = [];
        list.forEach(element => {
            bod.push(<LoadWid Nav={props.navigation} Title={element}  />)
        });
    }

    const [bo, setBo] = useState([]);

    const addlocation = async () => {
        try {
            const value = await AsyncStorage.getItem('Locations'); 
            if (value !== null) { 
                const dasd =  value + ", " + text;
                AsyncStorage.setItem('Locations',dasd);
                bod.push(<LoadWid Nav={props.navigation} Title={value}  />);
                setBo(bod);
              } else { 
                console.log("PeePee")
            }
        } catch (error) { 
        
        }
    }
    return(
        <StyledScroll className="bg-neutral-900 ">
            <StyledView className="my-5"> 
                {convert(props.list)}
                <StyledButton 
                    onPress={() => {setShow(true)}}
                    className="bg-blue-900 mx-3 my-4" 
                >
                    <StyledText className="text-center text-4xl py-4 text-amber-600"> Add new Location</StyledText>    
                </StyledButton>
                <Dialog.Container visible={show}>
                    <Dialog.Title>Account delete</Dialog.Title>
                    <Dialog.Description>
                        Please enter the name of the location.
                    </Dialog.Description>
                    <Dialog.Input onChangeText={e => setText(e)}> </Dialog.Input>
                    <Dialog.Button label="OK" onPress={() => {setShow(false); addlocation()}} />
                    <Dialog.Button label="Cancel" onPress={() => setShow(false)} />
                    </Dialog.Container>
            </StyledView> 
        </StyledScroll>
    )
    
} 
export default Weathers     