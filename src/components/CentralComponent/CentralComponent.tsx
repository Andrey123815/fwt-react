import React, {Component} from 'react';
import './CentralComponent.css';
import Map from "../Map/Map";
import Schedule from "../Schedule/Schedule";

class CentralComponent extends Component<{}, {}> {
    render() {
        return (
            <div className="central-component">
                <Map />
                <Schedule />
            </div>
        );
    }
}

export default CentralComponent;
