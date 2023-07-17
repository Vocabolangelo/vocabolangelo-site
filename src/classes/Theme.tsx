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

}
