import React, {Component} from 'react';
import {ISchedulePoint} from "../Schedule/Schedule";
import {getFormattedDate, getMatchDuration, getWeekDay} from "../../libraries/dateLibrary";
import {TAnchorClick} from "../DownContentLine/DownContentLine";

interface Props {
    point: ISchedulePoint,
    onTeamMembersClick: TAnchorClick
}

function getMembersStatsColor(now: number, need: number):string {
    let color = "red";
    const fillingPercentage = now / need;
    if (fillingPercentage === 1.0) {
        color = "#bc8ef6";
    } else if (fillingPercentage > 0.7) {
        color = "#7FFF00FF";
    } else if (fillingPercentage >= 0.5) {
        color = "yellow" ;
    }

    return color;
}

class SchedulePoint extends Component<Props, {}> {
    render() {
        const point = this.props.point;
        let color = getMembersStatsColor(point.membersCountNow, point.membersCountNeed);

        return (
            <tr>
                <td>{getWeekDay(point.date)}</td>
                <td>{getFormattedDate(point.date)}</td>
                <td>{getMatchDuration(point.date, point.startTime, point.finishTime)}</td>
                <td>{point.place}</td>
                <td><span style={{color: "orange"}}>&lt;{point.team}&gt;</span></td>
                <td>
                    <a href="" id={point.team} onClick={this.props.onTeamMembersClick} style={{color}}>
                        {point.membersCountNow}/{point.membersCountNeed}
                    </a>
                </td>
            </tr>
        );
    }
}

export default SchedulePoint;
