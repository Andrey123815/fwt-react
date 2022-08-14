import React, {Component} from 'react';
import './CentralComponent.css';
import Map from "../Map/Map";
import Schedule from "../Schedule/Schedule";
import {contentType} from "../DownContentLine/DownContentLine";

interface Props {
    contentType: contentType
}

class CentralComponent extends Component<Props, {}> {
    render() {
        const {contentType} = this.props;
        switch (contentType){
            case "freeTeam":
                return (
                    <div className="central-component">
                        <Schedule onlyFreeTeams={true}/>
                    </div>
                );
            case "createTeam":
                return (
                    <div className="central-component">
                        <Map />
                        <Schedule />
                    </div>
                );
            case "cancellation":
                return (
                    <div className="central-component">
                        <Map />
                        <Schedule />
                    </div>
                );
        }

        return (
            <div className="central-component">
                <Map />
                <Schedule />
            </div>
        );
    }
}

export default CentralComponent;
