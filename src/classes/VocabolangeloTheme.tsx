import {StoryColor} from './story/StoryColor'
import {Theme} from './Theme'

export enum VocabolangeloTheme {
    BLACK,
    WHITE
}

export function vocabolangeloThemes(): Map<VocabolangeloTheme,Theme> {
    return new Map<VocabolangeloTheme,Theme>([
        [VocabolangeloTheme.WHITE, new Theme(StoryColor.White)],
        [VocabolangeloTheme.BLACK, new Theme(StoryColor.Black, true)]
    ])
}

