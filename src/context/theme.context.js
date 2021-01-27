import React, { createContext, useState, useContext, useMemo} from "react";
import { createMuiTheme, useTheme, ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';
import useMediaQuery from "@material-ui/core/useMediaQuery";
import grey from '@material-ui/core/colors/grey';
import yellow from '@material-ui/core/colors/yellow';
import red from '@material-ui/core/colors/red';
import lightblue from "@material-ui/core/colors/lightBlue";
import deeporange from "@material-ui/core/colors/deepOrange";

export const ThemeDispatchContext = createContext()
export const ThemeStateContext = ThemeProvider

export const theme = createMuiTheme({
    breakpoints: {
        values: {
            sm: 450,
            md: 600,
            lg: 900,
        }
    },
    typography: {
        body1: {
            fontSize: "18px",
            lineHeight: 1.2395,
            '@media (min-width:600px)': {
                fontSize: '14px',
                lineHeight: 1.2475,
            },
        }
    },

    overrides: {
        MuiCssBaseline: {
            '@global': {
                html: {
                    WebkitFontSmoothing: 'auto',
                },
            },
        },
        MuiTypography: {
            body1: {
                fontSize: "18px",
                lineHeight: 1.2395,
                '@media (min-width:600px)': {
                    fontSize: '14px',
                    lineHeight: 1.2475,
                },
            }
        }
    },

    props: {
        // Name of the component ⚛️
        MuiButtonBase: {
            // The default props to change
            disableRipple: true, // No more ripple, on the whole application 💣!
        },
        MuiListRoot: {
            color: "#988534"
        }
    },
});

export const ThemeContextProvider = ({children}) => {
    const [darkMode, setDarkMode] = useState(false)
    const [value, setValue] = useState(0)
    const [meta, setMeta] = useState(true)
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const darkTheme = createMuiTheme({
        palette: {
            type: 'dark',
            primary: {
                main: yellow[600]
            },
            secondary: {
                main: lightblue[500]
            },
            background: {
                default: '#000',
            }, ...theme
        }
    })

    const lightTheme = createMuiTheme({
        palette: {
            type: 'light',
            primary: {
                main: '#ff3200'
                // main: '#39AB10'
            },
            secondary: {
                main: grey[900]
            }, ...theme
        }
    })

    useMemo(
        () =>
            prefersDarkMode ?
                setDarkMode(true)
                : setDarkMode(false),
        [prefersDarkMode],
    );

    return (
        <ThemeDispatchContext.Provider value={{darkMode, setDarkMode, value, setValue, meta, setMeta}}>
            <ThemeStateContext
                theme={
                    // theme
                    darkMode ?
                        darkTheme
                        : lightTheme
                }>
                {children}
            </ThemeStateContext>
        </ThemeDispatchContext.Provider>
    )
}

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