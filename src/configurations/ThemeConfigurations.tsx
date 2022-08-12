import {createContext} from "react";

export interface ISingleTheme {
    background: string,
    border: string,
    fontColor: string,
}

export const themes = {
    light: {
        background: '#3e423f',
        border: '#c9c1c9',
        fontColor: '#860af2'
    },
    dark: {
        background: '#fefcff',
        border: '#96969e',
        fontColor: '#db0f8d'
    }
}

export const ThemeContext = createContext(themes.dark);
