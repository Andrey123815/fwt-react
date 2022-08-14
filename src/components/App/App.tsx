import React, {Component} from 'react';
import './App.css';
import SettingsBlock from "../SettingsBlock/SettingsBlock";
import MainContentBlock from "../MainContentBlock/MainContentBlock";
import {ISingleTheme, themes} from "../../configurations/ThemeConfigurations";
import {ThemeContext} from "../../configurations/ThemeConfigurations";
import {defaultUser, ISingleUser, UserContext} from "../../configurations/UserConfigurations";
import fs from 'fs'
// const fs = require('fs');

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
            user: defaultUser
        };
    }

    componentDidMount() {
        // const userData = fs.readFileSync('./dataSource/user.json');
        // const userParsed: ISingleUser = JSON.parse(fs.readFileSync('./dataSource/user.json', 'utf-8'));
        // console.log(userParsed.nickname);

        // fetch("file:///home/andrey/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/fwt-react/dataSource/user.json")
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log("data:", data)
        //     })

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
                        <UserContext.Provider value={{ user: defaultUser, updateUserInfo: this.updateUserInfo }}>
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
