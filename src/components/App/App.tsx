import React from 'react';
import './App.css';
import SettingsBlock from "../SettingsBlock/SettingsBlock";
import MainContentBlock from "../MainContentBlock/MainContentBlock";
import {ISingleTheme, themes} from "../../configurations/ThemeConfigurations";

import React, {Component} from 'react';

interface Props {
    name: string
}

interface States {
    theme: ISingleTheme
}

const ThemeContext = React.createContext('light');

class App extends Component<Props, States> {
    private readonly toggleTheme: () => void;

    constructor(props) {
        super(props);

        this.state = {
           theme: themes.dark,
        };

        this.toggleTheme = () => {
            this.setState(state => ({
                theme:
                    state.theme === themes.dark
                        ? themes.light
                        : themes.dark,
            }));
        };
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <ThemeContext.Provider value="dark">
                        <SettingsBlock changeTheme={this.toggleTheme} />
                        <MainContentBlock />
                    </ThemeContext.Provider>
                </header>
            </div>
        );
    }
}

App.contextType = ThemeContext;

export default App;
