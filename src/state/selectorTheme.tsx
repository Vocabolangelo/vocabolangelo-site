import {vocabolangeloThemes} from '../classes/VocabolangeloTheme'
import {useSelector} from 'react-redux'
import {State} from './State'
import {Theme} from '../classes/Theme'
import {StoryColor} from '../classes/story/StoryColor'

export function selectorTheme() {
    const theme = vocabolangeloThemes().get(useSelector((state: State) => state.theme))
    return theme !== undefined ? theme : new Theme(StoryColor.White)
}
