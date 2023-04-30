import Footer from './Footer'
import Header from './Header'
import React from 'react'
import {Main} from './Main'

interface DefaultLayoutProps {
    title: string
    subtitle: string | null
    content: JSX.Element
}

export default function DefaultLayout(props: DefaultLayoutProps) {
    const {title, subtitle, content} = props
    return <Main>
        <main id="wrapper" className="divided">
            <section className="wrapper style1 align-center">
                <div className="inner">
                    <header>
                        <h1>{title}</h1>
                        {subtitle !== null ? <p> {subtitle} </p> : <></>}
                    </header>
                    <div className="index align-left"> {content} </div>
                </div>
            </section>
        </main>
    </Main>
}
