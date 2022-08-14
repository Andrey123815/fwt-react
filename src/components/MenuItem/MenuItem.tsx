import React, {Component} from 'react';
import './MenuItem.css';
import {IThemeContext, ThemeContext} from "../../configurations/ThemeConfigurations";

interface Props {
    menuPoint: string,
    onClick: (e: React.MouseEvent<HTMLElement>) => void,
    id: string
}

class MenuItem extends Component<Props, {}> {
    static contextType = ThemeContext;
    context!: Readonly<IThemeContext>;

    render() {
        const {theme} = this.context;
        const menuStyles = `menu-item menu-item_${theme.themeName}-theme`;
        return (
            <div id={this.props.id} onClick={this.props.onClick} className={menuStyles}>
                {this.props.menuPoint}
            </div>
        );
    }
}

export default MenuItem;
