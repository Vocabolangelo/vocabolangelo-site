import {useEffect, useState} from 'react'
import {Person} from '../../rdf/types/Person'
import {Link} from 'react-router-dom'
import {PAROLANGELO_ROUTE} from '../../routes/Parolangelo'
import Spotlight from '../common/story/Spotlight'

/**
 * Spotlight that present the number of Vocabolieri in the Vocabolangelo Project.
 */
export default function CreatorCountSpotlight() {
    const [creatorCount, setCreatorCount] = useState(0)

    useEffect(() => {
        Person.all().then(creators => {
            setCreatorCount(creators.length)
        })
    }, [])

    return <Spotlight
        style={1}
        optionalModifiers={['orient-left', 'content-align-left', 'image-position-right', 'onscroll-image-fade-in']}
        imageUrl={'/images/people.jpg'}
        imageAlt={'Collaborazione'}
    >
        <h1> {creatorCount} </h1>
        <p>
            Sono i <Link to={`${PAROLANGELO_ROUTE}/vocaboliere`}>vocabolieri</Link> del
            <strong> Vocabolangelo</strong>. <br/>
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
    </Spotlight>
}
