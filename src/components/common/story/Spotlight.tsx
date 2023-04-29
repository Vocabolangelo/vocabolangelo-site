/**
 * Spotlight element from the Story Layout.
 * @param {SpotlightProps} props the component props.
 */
export default function Spotlight(props: SpotlightProps) {
    const {style, optionalModifiers, content, imageUrl, imageAlt} = props
    return <section className={`spotlight style${style} ${optionalModifiers?.map(m => `${m} `)}`}>
        <div className="content">
            {content}
        </div>
        <div className="image">
            <img src={imageUrl} alt={imageAlt}/>
        </div>
    </section>
}