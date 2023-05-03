import TitleProps from '../props/TitleProps'

export function NamedSection(props: TitleProps) {
    return <section>
        <header>
            <h3>{props.title}</h3>
        </header>
        <div className="content">
            {props.children}
        </div>
    </section>
}
