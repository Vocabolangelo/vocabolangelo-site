import ChildrenProps from '../props/ChildrenProps'

interface NamedSectionProps extends ChildrenProps {
    title: string
}
export function NamedSection(props: NamedSectionProps) {
    return <section>
        <header>
            <h3>{props.title}</h3>
        </header>
        <div className="content">
            {props.children}
        </div>
    </section>
}
