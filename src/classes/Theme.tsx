import { StoryColor } from './story/StoryColor'

export class Theme {

    invert: boolean
    color: StoryColor

    constructor(color: StoryColor, invert = false) {
        this.color = color
        this.invert = invert
    }
    
    toModifiers(): string {
        return (this.invert ? 'invert ' : '') + (this.color !== StoryColor.White ? `color${this.color.valueOf()}` : '')
    }

    static themes(): Map<VocabolangeloTheme,Theme> {
        return new Map<VocabolangeloTheme,Theme>([
            [VocabolangeloTheme.WHITE, new Theme(StoryColor.White)],
            [VocabolangeloTheme.DARK, new Theme(StoryColor.Grey, true)],
            [VocabolangeloTheme.BLACK, new Theme(StoryColor.Black, true)]
        ])
    }

}

enum VocabolangeloTheme {
    BLACK,
    DARK,
    WHITE
}

