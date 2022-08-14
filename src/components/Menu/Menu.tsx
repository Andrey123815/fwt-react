import React, {Component} from 'react';
import MenuItem from "../MenuItem/MenuItem";
import './Menu.css';

interface Props {
    menuItemClick: (e: React.MouseEvent<HTMLElement>) => void
}

const menuItems = [
    {
        text: 'Найти свободные команды',
        shortKey: "freeTeam"
    },
    {
        text: 'Создать команду и забронировать площадку',
        shortKey: "createTeam"
    },
    {
        text: 'Отмена бронирования или перенос времени',
        shortKey: "cancellation"
    },
    {
        text: 'Мое расписание',
        shortKey: "mySchedule"
    },
];

class Menu extends Component<Props, {}> {
    render() {
        const menu = menuItems.map((item) =>
            <div>
                <MenuItem id={item.shortKey} onClick={this.props.menuItemClick} key={item.text} menuPoint={item.text} />
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
