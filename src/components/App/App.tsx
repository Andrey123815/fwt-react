import React, {Component} from 'react';
import './App.css';
import SettingsBlock from "../SettingsBlock/SettingsBlock";
import MainContentBlock from "../MainContentBlock/MainContentBlock";
import {ISingleTheme, themes} from "../../configurations/ThemeConfigurations";
import {ThemeContext} from "../../configurations/ThemeConfigurations";
import {ISingleUser, UserContext} from "../../configurations/UserConfigurations";
import userData from '../../dataSource/user.json';

interface States {
    theme: ISingleTheme,
     user: ISingleUser
}

class App extends Component<{}, States> {
    public toggleTheme: () => void;
    public updateUserInfo: (newUser: ISingleUser) => void;

    constructor(props: {}) {
        super(props);

        this.toggleTheme = () => {
            this.setState(state => ({
                theme:
                    state.theme === themes.dark
                        ? themes.light
                        : themes.dark,
                user: this.state.user
            }));
        };

        this.updateUserInfo = (newUser) => {
            this.setState(state => ({
                theme: this.state.theme,
                user: newUser,
            }));
        };

        this.state = {
            theme: themes.dark,
            user: userData
        };
    }

    componentDidMount() {
        // Имитация запроса на юзера
        // и передать через пропсы или HOC эти запросы в качестве selectedData
    }

    render() {
        const {theme} = this.state;
        const appTheme = `app-${this.state.theme.themeName}-theme app-padding`;
        return (
            <div className="app">
                <div className={appTheme}>
                    <ThemeContext.Provider value={{ theme, toggleTheme: this.toggleTheme }}>
                        <UserContext.Provider value={{ user: userData, updateUserInfo: this.updateUserInfo }}>
                            <SettingsBlock />
                            <MainContentBlock />
                        </UserContext.Provider>
                    </ThemeContext.Provider>
                </div>
            </div>
        );
    }
}

export default App;
