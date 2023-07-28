import { PayloadAction, configureStore, createSlice} from '@reduxjs/toolkit'
import { Theme } from '../classes/Theme'
import { State } from './State'
import { StoryColor } from '../classes/story/StoryColor'

const initialState: State = {
    theme: new Theme(StoryColor.White)
}
  
export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme: (state, action: PayloadAction<Theme>) => {
            state.theme = action.payload
        }
    }
})
  
export const {setTheme} = themeSlice.actions
  
export const store = configureStore({
    reducer: themeSlice.reducer,
})
