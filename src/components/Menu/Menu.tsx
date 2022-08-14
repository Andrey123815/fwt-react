import React, {Component} from 'react';
import MenuItem from "../MenuItem/MenuItem";
import './Menu.css';

// interface MenuItemStates {
//     freeTeams: boolean,
//     createTeam: boolean,
//     cancellation: boolean,
//     mySchedule: boolean
// }

const menuItems = [
    'Найти свободные команды',
    'Создать команду и забронировать площадку',
    'Отмена бронирования или перенос времени',
    'Мое расписание',
];

class Menu extends Component<{}, {}> {
    constructor(props: Readonly<any>) {
        super(props);
    }

    render() {
        const menu = menuItems.map((item) =>
            <div>
                <MenuItem key={item} menuPoint={item} />
            </div>
        );
        return (
            <div className="menu">
                {menu}
            </div>
        );
    }
}

export default Menu;
