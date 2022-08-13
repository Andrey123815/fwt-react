import React, {Component} from 'react';
import './MenuItem.css';
import {IThemeContext, ThemeContext} from "../../configurations/ThemeConfigurations";

interface Props {
    menuPoint: string
}

class MenuItem extends Component<Props, {}> {
    static contextType = ThemeContext;
    context!: Readonly<IThemeContext>;

    render() {
        const {theme} = this.context;
        const menuStyles = `menu-item menu-item_${theme.themeName}-theme`;
        return (
            <div className={menuStyles}>
                {this.props.menuPoint}
            </div>
        );
    }
}

export default MenuItem;
