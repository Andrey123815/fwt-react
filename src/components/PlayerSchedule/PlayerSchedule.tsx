import React, {Component} from 'react';
import SchedulePoint from "../SchedulePoint/SchedulePoint";
import './PlayerSchedule.css';

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

    componentDidMount() {
        // Запрос
        const schedulePointsData = [
            {
                date: '2022, 1, 14',
                startTime: '9, 0, 0, 0',
                finishTime: '11, 0, 0, 0',
                place: 'г.Раменское, ул.Крымская, дом 10',
                team: 'Favorite',
                membersCountNow: 1,
                membersCountNeed: 6,
            },
            {
                date: '2022, 1, 14',
                startTime: '9, 0, 0, 0',
                finishTime: '11, 0, 0, 0',
                place: 'г.Раменское, ул.Крымская, дом 10',
                team: 'Favorite',
                membersCountNow: 2,
                membersCountNeed: 6,
            },
            {
                date: '2022, 1, 14',
                startTime: '9, 0, 0, 0',
                finishTime: '11, 0, 0, 0',
                place: 'г.Раменское, ул.Крымская, дом 10',
                team: 'Favorite',
                membersCountNow: 3,
                membersCountNeed: 6,
            },
            {
                date: '2022, 1, 14',
                startTime: '9, 0, 0, 0',
                finishTime: '11, 0, 0, 0',
                place: 'г.Раменское, ул.Крымская, дом 10',
                team: 'Favorite',
                membersCountNow: 4,
                membersCountNeed: 6,
            },
            {
                date: '2022, 1, 14',
                startTime: '9, 0, 0, 0',
                finishTime: '11, 0, 0, 0',
                place: 'г.Раменское, ул.Крымская, дом 10',
                team: 'Favorite',
                membersCountNow: 5,
                membersCountNeed: 6,
            },
            {
                date: '2022, 1, 14',
                startTime: '9, 0, 0, 0',
                finishTime: '11, 0, 0, 0',
                place: 'г.Раменское, ул.Крымская, дом 10',
                team: 'Favorite',
                membersCountNow: 6,
                membersCountNeed: 6,
            },
        ];
        this.setState({
            schedulePoints: schedulePointsData
        });
    }

    render() {
        const schedulePointsToRender = this.state.schedulePoints.map((point) =>
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
