import React, {Component} from 'react';
import {ThemeContext, themes} from "../../configurations/ThemeConfigurations";

class SettingsBlock extends Component<{}, {}> {
    context!: React.ContextType<typeof ThemeContext>;

    render() {
        const { theme, toggleTheme } = this.context;
        return (
            <div>
                <img width={100} height={100} src={theme === themes.dark
                    ? "./brightness__switcher_white.svg"
                    : "./brightness__switcher_black.svg"}
                     alt="" onClick={toggleTheme}/>
            </div>
        );
    }
}

SettingsBlock.contextType = ThemeContext;

export default SettingsBlock;

