import {createContext} from "react";

export interface ISingleTheme {
    themeName: string,
    background: string,
    border: string,
    fontColor: string,
}

export const themes = {
    light: {
        themeName: 'light',
        background: '#3e423f',
        border: '#c9c1c9',
        fontColor: '#860af2'
    },
    dark: {
        themeName: 'dark',
        background: '#fefcff',
        border: '#96969e',
        fontColor: '#db0f8d'
    }
}

export interface IThemeContext {
    theme: ISingleTheme,
    toggleTheme: () => void
}

export const ThemeContext = createContext<IThemeContext>({
    theme: themes.dark,
    toggleTheme: () => {}
});
