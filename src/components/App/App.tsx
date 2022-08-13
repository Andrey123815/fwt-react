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
    }

    componentDidMount() {
        // можно здесь сделать запрос на юзера
        // можно здесь сделать запрос на адрес
        // и передать через пропсы или HOC и передавать туда эти запросы в качестве selectedData
    }

    render() {
        const {theme} = this.state;
        const appTheme = `app-${this.state.theme.themeName}-theme app-padding`;
        return (
            <div className="app">
                <div className={appTheme}>
                    <ThemeContext.Provider value={{ theme, toggleTheme: this.toggleTheme }}>
                        <SettingsBlock />
                        <MainContentBlock />
                    </ThemeContext.Provider>
                </div>
            </div>
        );
    }
}

export default App;
