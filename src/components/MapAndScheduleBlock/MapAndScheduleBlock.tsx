import React, {Component} from 'react';
import Map from "../Map/Map";
import PlayerSchedule from "../PlayerSchedule/PlayerSchedule";
import './MapAndSCheduleBlock.css';

class MapAndScheduleBlock extends Component<{}, {}> {
    render() {
        return (
            <div style={{width: "75%", maxHeight: "840px"}}>
                <Map />
                <div style={{width: "80%", marginBottom: "30px", fontSize: "20px"}}>Ваше расписание на ближайшее время</div>
                <PlayerSchedule />
            </div>
        );
    }
}

export default MapAndScheduleBlock;
