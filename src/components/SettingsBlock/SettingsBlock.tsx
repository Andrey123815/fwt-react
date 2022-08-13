import React, {Component} from 'react';
import './SettingsBlock.css';
import {ThemeContext} from "../../configurations/ThemeConfigurations";

class SettingsBlock extends Component<{}, {}> {
    context!: React.ContextType<typeof ThemeContext>;

    render() {
        const { theme, toggleTheme } = this.context;
        const switcherImg = `./brightness__switcher_${theme.themeName}-theme.svg`;
        return (
            <div className="setting-block">
                <img width={70} height={70} src={switcherImg}
                     alt="" onClick={toggleTheme}/>
            </div>
        );
    }
}

SettingsBlock.contextType = ThemeContext;

export default SettingsBlock;

