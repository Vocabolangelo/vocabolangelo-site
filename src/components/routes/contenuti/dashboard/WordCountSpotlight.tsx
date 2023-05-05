import {useEffect, useState} from 'react'
import {Concept} from '../../../../rdf/types/Concept'
import {PAROLANGELO_ROUTE} from '../../parolangelo/Parolangelo'
import {Link} from 'react-router-dom'
import Spotlight from '../../../common/story/Spotlight'

export default function WordCountSpotlight() {
    const [wordCount, setWordCount] = useState(0)

    useEffect(() => {
        Concept.all().then(concepts => {
            setWordCount(concepts.length)
        })
    }, [])

    function highestMultipleOf500(num : number): number {
        return Math.ceil(num / 500) * 500
    }

    return <Spotlight
        style={1}
        optionalModifiers={['orient-right', 'content-align-left', 'image-position-center', 'onscroll-image-fade-in']}
        imageUrl={'/images/math.jpg'}
        imageAlt={'Matematica'}
    >
        <h1> {wordCount} </h1>
        <p>
            Sono le <Link to={`${PAROLANGELO_ROUTE}/parolangelo`}>
                parolangelo
            </Link> all&apos;interno del <strong> Vocabolangelo</strong>.<br/>
            Quando ci saranno grandi traguardi tutti i <Link to={`${PAROLANGELO_ROUTE}/vocaboliere`}>
                vocabolieri
            </Link> festeggeranno in qualche modo, ad esempio con un <Link to={`${PAROLANGELO_ROUTE}/festabolangelo`}>
                festabolangelo
            </Link>.<br/>
            Al momento puntiamo a raggiungere le <strong>{highestMultipleOf500(wordCount)}</strong> parolangelo!
        </p>
        <ul className="actions stacked">
            <li>
                <a href="https://github.com/Vocabolangelo/" className="button">
                    Collabora
                </a>
            </li>
        </ul>
    </Spotlight>
}
