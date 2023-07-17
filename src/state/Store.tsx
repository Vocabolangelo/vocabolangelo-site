import { PayloadAction, configureStore, createSlice} from '@reduxjs/toolkit'
import { Theme } from '../classes/Theme'
import { State } from './State'
import {VocabolangeloTheme} from '../classes/VocabolangeloTheme'

const initialState: State = {
    theme: VocabolangeloTheme.WHITE
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
