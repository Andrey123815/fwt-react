import React, {Component} from 'react';
import MenuItem from "../MenuItem/MenuItem";
import './Menu.css';

const menuItems = [
    'Найти команду',
    'Найти все свободные площадки по указанному адресу',
    'Забронировать футбольную площадку по адресу',
    'Отмена бронирования или перенос времени',
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
