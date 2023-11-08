import StorySectionProps from '../../props/StorySectionProps'

export default function StorySection(props: StorySectionProps) {
    const {style, optionalModifiers, imageUrl, imageAlt} = props
    const modifierString = optionalModifiers?.join(' ')
    return <section className={`style${style} ${modifierString}`}>
        <div className="content">
            {props.children}
        </div>
        {imageUrl !== undefined &&
            <div className="image">
                <img src={imageUrl} alt={imageAlt}/>
            </div>
        }
    </section>
}
