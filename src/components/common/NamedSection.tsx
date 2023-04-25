interface NamedSectionProps{
    title: string
    content: JSX.Element
}
export function NamedSection(props: NamedSectionProps) {
    const {title, content} = props
    return (
        <>
            <section>
                <header>
                    <h3>{title}</h3>
                </header>
                <div className="content">
                    {content}
                </div>
            </section>
        </>
    );
}





