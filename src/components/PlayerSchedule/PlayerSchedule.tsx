import React, {Component} from 'react';
import SchedulePoint from "../SchedulePoint/SchedulePoint";
import './PlayerSchedule.css';
import {IUserContext, UserContext} from "../../configurations/UserConfigurations";

export interface ISchedulePoint {
    date: string,
    startTime: string,
    finishTime: string,
    place: string,
    team: string,
    membersCountNow: number,
    membersCountNeed: number,
}


interface States {
    schedulePoints: ISchedulePoint[]
}

class PlayerSchedule extends Component<{}, States> {
    constructor(props: Readonly<any>) {
        super(props);
        this.state = {
            schedulePoints: []
        };
    }

    static contextType = UserContext;
    context!: Readonly<IUserContext>;

    render() {
        const {schedule} = this.context.user;
        const schedulePointsToRender = schedule.map((point) =>
            <SchedulePoint point={point} />
        )
        return (
            <table>
                <tr>
                    <th>День недели</th>
                    <th>Дата матча</th>
                    <th>Продолжительность матча</th>
                    <th>Местоположения поля</th>
                    <th>Команда</th>
                    <th>Состав</th>
                </tr>
                {schedulePointsToRender}
            </table>
        );
    }
}

export default PlayerSchedule;
