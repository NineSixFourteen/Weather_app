import React, {useState} from "react";
import LocationSmallWidget from "./LocationSmallWidget";
import LocationWidget from "./LocationWidget";

const LocWidget = props => { 
    const [widget, toggleWidget] = useState(true);

    let func = () => {
        toggleWidget(!widget)
    }
    if (!widget) {
      return <LocationWidget key={props.Title} Title={props.Title} 
        Location={props.Location} Temperature={props.Temperature} 
        Weather={props.Weather} Time={props.Time} 
        Prec={props.Prec} Hum={props.Hum} Wind={props.Wind} 
        Func={func} Nav={props.Nav}/> 
    }
    return <LocationSmallWidget
        key={props.Title} Title={props.Title} 
        Location={props.Location} Temperature={props.Temperature} 
        Weather={props.Weather} Time={props.Time} 
        Func={func}/>;
} 
export default LocWidget