import React, {Component} from 'react';
import './App.css';
import SettingsBlock from "../SettingsBlock/SettingsBlock";
import MainContentBlock from "../MainContentBlock/MainContentBlock";
import {ISingleTheme, ThemeContext, themes} from "../../configurations/ThemeConfigurations";

interface States {
    theme: ISingleTheme
}

class App extends Component<{}, States> {
    public toggleTheme: () => void;

    constructor(props: {}) {
        super(props);

        this.toggleTheme = () => {
            // alert(this.state.theme === themes.dark);
            this.setState(state => ({
                theme:
                    state.theme === themes.dark
                        ? themes.light
                        : themes.dark,
            }));
        };

        this.state = {
           theme: themes.dark,
        };

        // this.toggleTheme = this.toggleTheme.bind(this);
    }

    render() {
        const {theme} = this.state;
        return (
            <div className="App">
                <header className="App-header">
                    <ThemeContext.Provider value={{ theme, toggleTheme: this.toggleTheme }}>
                        <SettingsBlock />
                        <MainContentBlock />
                    </ThemeContext.Provider>
                </header>
            </div>
        );
    }
}

export default App;
