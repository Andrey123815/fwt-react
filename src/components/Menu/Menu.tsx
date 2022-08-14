import React, {Component} from 'react';
import MenuItem from "../MenuItem/MenuItem";
import './Menu.css';

const menuItems = [
    'Найти свободные команды',
    'Создать команду и забронировать площадку',
    'Отмена бронирования или перенос времени',
    'Мое расписание',
];

class Menu extends Component<{}, {}> {
    render() {
        const menu = menuItems.map((item) =>
            <div>
                <MenuItem key={item} menuPoint={item}/>
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
