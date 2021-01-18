import React, { createContext, useState, useContext, useReducer} from "react";

export const HistoryStateContext = createContext()
export const HistoryDispatchContext = createContext()

export const HistoryProvider = ({children}) => {
    const [savedWords, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'add':
                // const {existing} = state.filter(s => s.name === action.name && s.uuid === action.uuid)
                const wordIndex = state.findIndex(word =>
                    word.uuid === action.headInstance ||
                    word.name === action.name &&
                    word.sense === action.senseDefinition
                );
                if (wordIndex !== -1) {
                    return state.map((word, i) => ({
                        ...word,
                        value: word.value + (wordIndex === i ? 1 : 0)
                    }));
                } else {
                    return [
                        ...state,
                        {
                            id: state.length,
                            name: action.name,
                            value: 1,
                            root: action.headWord,
                            label: action.headLabel,
                            uuid: action.headInstance,
                            sense: action.senseDefinition,
                        }
                    ];
                }
            case 'remove':
                return state.filter((_, index) => index !== action.index);
            case 'clear':
                return [];
            default:
                return state;
        }
    }, []);

    return (
        <HistoryDispatchContext.Provider value={dispatch}>
            <HistoryStateContext.Provider value={savedWords}>
                {children}
            </HistoryStateContext.Provider>
        </HistoryDispatchContext.Provider>
    )
}

export const useHistory = () => useContext(HistoryStateContext)
export const useDispatchHistory = () => useContext(HistoryDispatchContext)