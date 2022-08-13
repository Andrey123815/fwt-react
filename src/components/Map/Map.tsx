import React, {Component} from 'react';
import {IThemeContext, ThemeContext} from "../../configurations/ThemeConfigurations";
import './Map.css';

class Map extends Component<{}, {}> {
    static contextType = ThemeContext;
    context!: Readonly<IThemeContext>;

    render() {
        const {theme} = this.context;
        const imgPath = `./map_${theme.themeName}_version.svg`;
        return (
            <div className="map-img">
                <img src={imgPath} width="80%" height="80%" alt="Map" />
            </div>
        );
    }
}

export default Map;
