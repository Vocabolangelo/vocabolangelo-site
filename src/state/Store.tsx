import { PayloadAction, configureStore, createSlice} from '@reduxjs/toolkit'
import { State } from './State'
import {valueToVocabolangeloTheme, VocabolangeloTheme} from '../classes/VocabolangeloTheme'

function getLocalStorageThemeOrDefault(): VocabolangeloTheme {
    const localStoreTheme: string | null = localStorage.getItem('vocabolangeloTheme')
    if(localStoreTheme != null) {
        const theme = valueToVocabolangeloTheme(+localStoreTheme)
        if(theme != null) {
            return theme
        }
    }
    return VocabolangeloTheme.WHITE
}

const initialState: State = {
    theme: getLocalStorageThemeOrDefault()
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme: (state, action: PayloadAction<VocabolangeloTheme>) => {
            state.theme = action.payload
        }
    }
})

export const {setTheme} = themeSlice.actions

export const store = configureStore({
    reducer: themeSlice.reducer,
})
