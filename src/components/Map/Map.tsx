import React, {Component} from 'react';
import './Map.css';
import {IThemeContext, ThemeContext} from "../../configurations/ThemeConfigurations";

class Map extends Component<{}, {}> {
    static contextType = ThemeContext;
    context!: Readonly<IThemeContext>;

    render() {
        const {theme} = this.context;
        const imgPath = `./map_${theme.themeName}_version.svg`;
        return (
            <div className="map">
                <div className="map-img">
                    <img src={imgPath} width="80%" height="80%" alt="Map" />
                </div>
            </div>
        );
    }
}

export default Map;
