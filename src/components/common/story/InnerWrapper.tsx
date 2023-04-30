import StorySectionProps from '../../props/StorySectionProps'

export default function InnerWrapper(props: StorySectionProps) {
    const {style, optionalModifiers} = props
    const modifierString = optionalModifiers?.join(' ')
    return <section className={`wrapper style${style} ${modifierString}`}>
        <div className="inner">
            {props.children}
        </div>
    </section>
}