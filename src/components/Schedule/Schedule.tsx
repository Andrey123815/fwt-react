import React, {Component} from 'react';
import SchedulePoint from "../SchedulePoint/SchedulePoint";
import './Schedule.css';
import {IUserContext, UserContext} from "../../configurations/UserConfigurations";
import {TAnchorClick} from "../DownContentLine/DownContentLine";

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

interface Props {
    onlyFreeTeams?: boolean,
    onTeamMembersClick: TAnchorClick
}

class Schedule extends Component<Props, States> {
    constructor(props: Readonly<Props>) {
        super(props);
        this.state = {
            schedulePoints: []
        };
    }

    static defaultProps: Partial<Props>;

    static contextType = UserContext;
    context!: Readonly<IUserContext>;

    render() {
        const {schedule} = this.context.user;
        const schedulePointsToRender = schedule
            .filter(point => this.props.onlyFreeTeams ? point.membersCountNow !== point.membersCountNeed : true)
            .map((point) =>
            <SchedulePoint onTeamMembersClick={this.props.onTeamMembersClick} point={point} />
        )
        const schedulePreview = this.props.onlyFreeTeams
            ? "Расписание свободных команд"
            : "Ваше расписание на ближайшее время";

        return (
            <div className="schedule">
                <div className="schedule__preview">{schedulePreview}</div>
                <table>
                    <thead>
                        <tr>
                            <th>День недели</th>
                            <th>Дата матча</th>
                            <th>Продолжительность матча</th>
                            <th>Местоположения поля</th>
                            <th>Команда</th>
                            <th>Состав</th>
                        </tr>
                    </thead>
                    {schedulePointsToRender}
                </table>
            </div>
        );
    }
}

Schedule.defaultProps = {
    onlyFreeTeams: false
}

export default Schedule;
