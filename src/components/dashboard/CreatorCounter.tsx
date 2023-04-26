import {useEffect, useState} from 'react'
import {Person} from '../../rdf/types/Person'
import {Link} from 'react-router-dom'
import {PAROLANGELO_ROUTE} from '../../routes/Parolangelo'

export default function CreatorCounter() {
    const [creatorCount, setCreatorCount] = useState(0)

    useEffect(() => {
        Person.all().then(creators => {
            setCreatorCount(creators.length)
        })
    }, [])

    return (
        <>
            <section className="spotlight style1 orient-left content-align-left image-position-right onscroll-image-fade-in" id="first">
                <div className="content">
                    <h1> {creatorCount} </h1>
                    <p>
                        Sono i <Link to={`${PAROLANGELO_ROUTE}/vocaboliere`}>vocabolieri</Link> del
                        <strong> Vocabolangelo.</strong>. <br/>
                        Grazie all&apos; <Link to={`${PAROLANGELO_ROUTE}/apostolangelo`}>
                            apostolangelo
                        </Link> un giorno questo numero sarà molto più alto.
                    </p>
                    <ul className="actions stacked">
                        <li>
                            <a href={PAROLANGELO_ROUTE} className="button">
                                Vocabolieri
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="image">
                    <img src="/images/people.jpg" alt="Collaborazione"/>
                </div>
            </section>
        </>
    )
}
