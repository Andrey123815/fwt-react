import React, {Component} from 'react';
import SchedulePoint from "../SchedulePoint/SchedulePoint";
import './PlayerSchedule.css';
import {IThemeContext, ThemeContext} from "../../configurations/ThemeConfigurations";

export interface ISchedulePoint {
    date: string,
    startTime: string,
    finishTime: string,
    place: string,
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

    static contextType = ThemeContext;
    context!: Readonly<IThemeContext>;

    componentDidMount() {
        // Запрос
        const schedulePointsData = [
            {
                date: '2022, 1, 14',
                startTime: '9, 0, 0, 0',
                finishTime: '11, 0, 0, 0',
                place: 'г.Раменское, ул.Крымская, дом 10',
            },
            {
                date: '2022, 1, 14',
                startTime: '9, 0, 0, 0',
                finishTime: '11, 0, 0, 0',
                place: 'г.Раменское, ул.Крымская, дом 10',
            },
            {
                date: '2022, 1, 14',
                startTime: '9, 0, 0, 0',
                finishTime: '11, 0, 0, 0',
                place: 'г.Раменское, ул.Крымская, дом 10',
            },
            {
                date: '2022, 1, 14',
                startTime: '9, 0, 0, 0',
                finishTime: '11, 0, 0, 0',
                place: 'г.Раменское, ул.Крымская, дом 10',
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
        // const {theme} = this.context;
        // const scheduleStyles = `player-schedule player-schedule_${theme.themeName}-theme`;
        return (
            <table>
                <tr>
                    <th>День недели</th>
                    <th>Дата матча</th>
                    <th>Продолжительность матча</th>
                    <th>Местоположения поля</th>
                    {/*<th>Время до матча</th>*/}
                    <th>Подтвердить заявку</th>
                </tr>
                {schedulePointsToRender}
            </table>
        );
    }
}

export default PlayerSchedule;
