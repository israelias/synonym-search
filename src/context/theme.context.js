import React, {createContext, useState, useContext, useReducer} from "react";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import yellow from '@material-ui/core/colors/yellow';
import red from '@material-ui/core/colors/red';
import lightblue from "@material-ui/core/colors/lightBlue";
import deeporange from "@material-ui/core/colors/deepOrange";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export const ThemeDispatchContext = createContext()
export const ThemeStateContext = ThemeProvider
// Create a theme instance.
export const theme = createMuiTheme({
    palette: {
        primary: {
            // light: '#757ce8',
            main: yellow[600],
            // dark: '#002884',
            // contrastText: '#fff',
        },
        secondary: {
            // light: '#ff7961',
            main: grey[900],
            // dark: '#ba000d',
            // contrastText: '#000',
        },
        error: {
            main: red.A400,
        },
        background: {
            // default: '#fff',
        },
    },

    // typography: {
    //     fontFamily: 'Raleway, Arial',
    // },

    overrides: {
        MuiCssBaseline: {
            '@global': {
                html: {
                    WebkitFontSmoothing: 'auto',
                },
            },
        },
    },

    props: {
        // Name of the component ⚛️
        MuiButtonBase: {
            // The default props to change
            disableRipple: true, // No more ripple, on the whole application 💣!
        },
    },
});

export const ThemeContextProvider = ({children}) => {
    const [darkMode, setDarkMode] = useState(false)
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');


    const darkTheme = createMuiTheme({
        palette: {
            type: 'dark'
        }
    })

    const lightTheme = createMuiTheme({})

    return (
        <ThemeDispatchContext.Provider value={{darkMode, setDarkMode}}>
            <ThemeStateContext theme={darkMode ? darkTheme : lightTheme}>
                {children}
            </ThemeStateContext>
        </ThemeDispatchContext.Provider>
    )
}

// export const useTheme = () => useContext(ThemeStateContext)
export const useDispatchTheme = () => useContext(ThemeDispatchContext)

// breakpoints: Object
// direction: "ltr"
// mixins: Object
// overrides: Object
// palette: Object
// common: Object
// type: "light"
// primary: Object
// secondary: Object
// error: Object
// warning: Object
// info: Object
// success: Object
// grey: Object
// contrastThreshold: 3
// getContrastText: f E()
// augmentColor: f B()
// tonalOffset: 0.2
// text: Object
// divider:
// rgba(0, 0, 0, 0.12)
// background: Object
// action: Object
// props: Object
// shadows: Array(25)
// typography: Object
// spacing: f e()
// shape: Object
// transitions: Object
// zIndex: Object