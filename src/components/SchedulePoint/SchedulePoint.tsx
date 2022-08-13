import React, {Component} from 'react';
import {ISchedulePoint} from "../PlayerSchedule/PlayerSchedule";
import {getFormattedDate, getMatchDuration, getWeekDay} from "../../libraries/dateLibrary";

interface Props {
    point: ISchedulePoint
}

class SchedulePoint extends Component<Props, {}> {
    render() {
        const point = this.props.point;
        return (
            <tr>
                <td>{getWeekDay(point.date)}</td>
                <td>{getFormattedDate(point.date)}</td>
                <td>{getMatchDuration(point.date, point.startTime, point.finishTime)}</td>
                <td>{point.place}</td>
                <td><a href="" style={{color: "red"}}>Подтвердить</a></td>
            </tr>
        );
    }
}

export default SchedulePoint;
