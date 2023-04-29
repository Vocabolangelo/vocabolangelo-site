import StorySectionProps from '../../props/StorySectionProps'

export default function StorySection(props: StorySectionProps) {
    const {style, optionalModifiers, imageUrl, imageAlt} = props
    console.log(optionalModifiers)
    const modifierString = optionalModifiers?.join(' ')
    console.log(modifierString)
    return <section className={`style${style} ${modifierString}`}>
        <div className="content">
            {props.children}
        </div>
        <div className="image">
            <img src={imageUrl} alt={imageAlt}/>
        </div>
    </section>
}