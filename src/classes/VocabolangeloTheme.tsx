import {StoryColor} from './story/StoryColor'
import {Theme} from './Theme'

export enum VocabolangeloTheme {
    BLACK = 0,
    WHITE = 255
}

export function vocabolangeloThemes(): Map<VocabolangeloTheme,Theme> {
    return new Map<VocabolangeloTheme,Theme>([
        [VocabolangeloTheme.WHITE, new Theme(StoryColor.White)],
        [VocabolangeloTheme.BLACK, new Theme(StoryColor.Black, true)]
    ])
}

export function valueToVocabolangeloTheme(value: number): VocabolangeloTheme | null {
    switch (value) {
    case 0:
        return VocabolangeloTheme.BLACK
    case 255:
        return VocabolangeloTheme.WHITE
    }
    return null
}

