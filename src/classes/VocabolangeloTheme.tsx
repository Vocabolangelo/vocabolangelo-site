import {StoryColor} from './story/StoryColor'
import {Theme} from './Theme'

/**
 * Enum which contain all the possible Vocabolangelo Themes.
 */
export enum VocabolangeloTheme {
    BLACK = 0,
    VIOLET = 1,
    WHITE = 255
}

export function vocabolangeloThemes(): Map<VocabolangeloTheme,Theme> {
    return new Map<VocabolangeloTheme,Theme>([
        [VocabolangeloTheme.WHITE, new Theme(StoryColor.White)],
        [VocabolangeloTheme.VIOLET, new Theme(StoryColor.Violet)],
        [VocabolangeloTheme.BLACK, new Theme(StoryColor.Black, true)]
    ])
}

export function valueToVocabolangeloTheme(value: number): VocabolangeloTheme | null {
    switch (value) {
    case 0:
        return VocabolangeloTheme.BLACK
    case 1:
        return VocabolangeloTheme.VIOLET
    case 255:
        return VocabolangeloTheme.WHITE
    }
    return null
}

