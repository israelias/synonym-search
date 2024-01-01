'use client';
import React, {
  createContext,
  useContext,
  useMemo,
  useState,
  useEffect,
} from 'react';
import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider
} from '@mui/material/styles';

import useMediaQuery from '@mui/material/useMediaQuery';
import { grey, lightBlue as lightblue } from '@mui/material/colors';

type IThemeContext = {
  darkMode: boolean;
  setDarkMode: (value: (((prevState: boolean) => boolean) | boolean)) => void;
  value: string;
  setValue: (value: (((prevState: string) => string) | string)) => void;
  meta: boolean;
  setMeta: (value: (((prevState: boolean) => boolean) | boolean)) => void;
  root: string;
  setRoot: (value: (((prevState: string) => string) | string)) => void;
  hasSession: boolean;
  setHasSession: (value: (((prevState: boolean) => boolean) | boolean)) => void;
};

export const ThemeDispatchContext = createContext<IThemeContext>(undefined!);

export const commonSettings = {
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          WebkitFontSmoothing: 'auto',
        },
        ul: {
          listStyle: 'none',
          padding: 0,
        },
      },
    },
    MuiTypography: {
      body1: {
        fontSize: '18px',
        lineHeight: 1.2395,
        '@media (min-width:600px)': {
          fontSize: '14px',
          lineHeight: 1.2475,
        },
      },
      body2: {
        marginRight: 16,
      },
      h6: {
        fontSize: '18px',
        fontWeight: 500,
        lineHeight: 1.2395,
      },
    },
    MuiList: {
      root: {
        maxWidth: '100%',
        backgroundColor: 'inherit',
        position: 'relative',
        '@media (min-width:600px)': {
          marginLeft: '8rem',
        },
      },
    },
    MuiListItem: {
      root: {
        // paddingLeft: '2px',
        paddingTop: 0,
        paddingBottom: 0,
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        minHeight: 'calc(2em + 2px)',
        borderBottom: '1px solid',
        // paddingRight: 0,
      },
      gutters: {
        paddingLeft: '2px',
        paddingRight: 0,
      },
    },
    MuiListItemText: {
      primary: {
        fontSize: '18px',
        lineHeight: 1.2395,
        '@media (min-width:600px)': {
          fontSize: '14px',
          lineHeight: 1.2475,
        },
      },
    },
  },

  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
    MuiListRoot: {
      color: '#988534',
    },
  },
};

const mainTheme = createTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    // MuiListRoot: {
    //   defaultProps: {
    //     color: '#988534',
    //   },
    // },
    MuiList: {
      styleOverrides: {
        root: {
          color: '#988534',
          maxWidth: '100%',
          backgroundColor: 'inherit',
          position: 'relative',
          '@media (min-width:600px)': {
            marginLeft: '8rem',
          },
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          paddingTop: 0,
          paddingBottom: 0,
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
          minHeight: 'calc(2em + 2px)',
          borderBottom: '1px solid',
        },
        gutters: {
          paddingLeft: '2px',
          paddingRight: 0,
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontSize: '18px',
          lineHeight: 1.2395,
          '@media (min-width:600px)': {
            fontSize: '14px',
            lineHeight: 1.2475,
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        body1: {
          fontSize: '18px',
          lineHeight: 1.2395,
          '@media (min-width:600px)': {
            fontSize: '14px',
            lineHeight: 1.2475,
          },
        },
        body2: {
          marginRight: 16,
        },
        h6: {
          fontSize: '18px',
          fontWeight: 500,
          lineHeight: 1.2395,
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        '@global': {
          html: {
            WebkitFontSmoothing: 'auto',
          },
          ul: {
            listStyle: 'none',
            padding: 0,
          },
        },
      },
    },
  },
});

const lightTheme = createTheme({
  ...mainTheme,
  palette: {
    mode: 'light',
    primary: {
      main: '#ff3200',
    },
    secondary: {
      main: grey[900],
    },
  },

});

const darkTheme = createTheme({
  ...mainTheme,
  palette: {
    mode: 'dark',
    primary: {
      main: lightblue[500],
    },
    secondary: {
      main: '#fafafa',
    },
    background: {
      default: '#151515',
    },
  },

});

export const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [sessionValue, setSessionValue] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Perform localStorage action
      setSessionValue(sessionStorage.getItem('theme'))
    }
  }, []);

  const [darkMode, setDarkMode] = useState(false);
  const [value, setValue] = useState('');
  const [meta, setMeta] = useState(true);
  const [root, setRoot] = useState('');
  const [hasSession, setHasSession] = useState(false);
  const prefersDarkMode = useMediaQuery(
    '(prefers-color-scheme: dark)',
  );

  useMemo(
    () => (prefersDarkMode ? setDarkMode(true) : setDarkMode(false)),
    [prefersDarkMode],
  );

  useEffect(() => {
    if (sessionValue !== null) {
      const sessionStore = JSON.parse(sessionValue);      // convert date string into Date object in messages
      // setDarkMode(sessionStore.darkMode);
      setHasSession(true);
      setValue(sessionStore.value || 'launch');
      setMeta(sessionStore.meta || true);
      setRoot(sessionStore.root || '');
    }
  }, [sessionValue]);

  // useEffect(() => {
  //   if (root.length > 0) {
  //     sessionStorage.setItem('theme', JSON.stringify({
  //       darkMode,
  //       value,
  //       meta,
  //       root,
  //       date: new Date(),
  //     }));
  //   }
  // }, [darkMode, value, meta, root]);


  // const [sessionTheme, setSessionTheme] = useState({
  //   darkMode: false,
  //   value: 'launch',
  //   meta: true,
  //   root: '',
  //   date: new Date(),
  // });
  //
  // useEffect(() => {
  //   // const value = sessionStorage.getItem('theme');
  //   if (sessionValue !== null) {
  //     const sessionStore = JSON.parse(sessionValue);
  //     // convert date string into Date object in messages
  //     setSessionTheme({
  //       ...sessionStore,
  //       darkMode: sessionStore.darkMode,
  //       value: sessionStore.value,
  //       meta: sessionStore.meta,
  //       root: sessionStore.root,
  //       date: new Date(sessionStore.date),
  //     });
  //   }
  // }, [sessionValue]);
  //
  useEffect(() => {
    if (root.length > 0) {
      sessionStorage.setItem('theme', JSON.stringify({
        darkMode,
        value,
        meta,
        root,
        date: new Date(),
      }));
    }
  }, [darkMode, value, meta, root]);



  const themeValue = useMemo(
    () => ({
      darkMode,
      setDarkMode,
      value,
      setValue,
      meta,
      setMeta,
      root,
      setRoot,
      hasSession,
      setHasSession,
    }),
    [darkMode, value, meta, root, hasSession],
  );

  return (
    <>
      <ThemeDispatchContext.Provider
        value={themeValue}
      >
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            {children}
          </ThemeProvider>
        </StyledEngineProvider>
      </ThemeDispatchContext.Provider>
    </>
  );
};

export const useDispatchTheme = () => useContext(ThemeDispatchContext);

