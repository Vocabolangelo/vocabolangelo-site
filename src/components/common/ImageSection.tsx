interface ImageSectionProps {
    content: JSX.Element
    imageSrc: string
    imageAlt: string

}
export function ImageSection(props: ImageSectionProps) {
    return <section className="spotlight style1 orient-left content-align-left image-position-center onscroll-image-fade-in">
        <div className="content">
            {props.content}
        </div>
        <div className="image">
            <img src={props.imageSrc} alt={props.imageAlt}/>
        </div>
    </section>
}

