import React, {Component} from 'react';
import {ISchedulePoint} from "../PlayerSchedule/PlayerSchedule";
import {getFormattedDate, getMatchDuration, getWeekDay} from "../../libraries/dateLibrary";

interface Props {
    point: ISchedulePoint
}

class SchedulePoint extends Component<Props, {}> {
    render() {
        const point = this.props.point;
        let color = "red";
        const fillingPercentage = point.membersCountNow / point.membersCountNeed;
        if (fillingPercentage === 1.0) {
            color = "#bc8ef6";
        } else if (fillingPercentage > 0.7) {
            color = "#7FFF00FF";
        } else if (fillingPercentage >= 0.5) {
            color = "yellow" ;
        }
        return (
            <tr>
                <td>{getWeekDay(point.date)}</td>
                <td>{getFormattedDate(point.date)}</td>
                <td>{getMatchDuration(point.date, point.startTime, point.finishTime)}</td>
                <td>{point.place}</td>
                <td><span style={{color: "orange"}}>&lt;{point.team}&gt;</span></td>
                <td><a href="" style={{color}}>{point.membersCountNow}/{point.membersCountNeed}</a></td>
            </tr>
        );
    }
}

export default SchedulePoint;
