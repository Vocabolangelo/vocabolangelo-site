import {useEffect, useState} from 'react'
import {Parolangelo} from '../../../../rdf/types/Parolangelo'
import {PAROLANGELO_ROUTE} from '../../concept/ConceptList'
import {Link} from 'react-router-dom'
import Spotlight from '../../../common/story/Spotlight'
import {RDFStore} from '../../../../rdf/RDFStore'
import {vocang} from '../../../../rdf/prefixes'

export default function ParolangeloCountSpotlight() {
    const [parolangeloCount, setParolangeloCount] = useState(0)
    const [soloParolangeloCount, setSoloParolangeloCount] = useState(0)

    useEffect(() => {
        Parolangelo.all().then(parolangelo => {
            setParolangeloCount(parolangelo.length)
            setSoloParolangeloCount(parolangelo.filter(p =>
                p.creators(node =>
                    (RDFStore.store.any(node, undefined, vocang.namespace('Vocaboliere')) !== null)
                )().length === 1
            ).length)
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
        <h1> {parolangeloCount} </h1>
        <p>
            Sono le <Link to={`${PAROLANGELO_ROUTE}/parolangelo`}>
                parolangelo
            </Link> all&apos;interno del <strong> Vocabolangelo</strong>.<br/>
            Di queste, <strong> {parolangeloCount - soloParolangeloCount} </strong> sono nate dalla collaborazione, mentre
            <strong> {soloParolangeloCount}</strong> sono state inventate dai singoli.<br/>
            Quando ci saranno grandi traguardi tutti i <Link to={`${PAROLANGELO_ROUTE}/vocaboliere`}>
                vocabolieri
            </Link> festeggeranno in qualche modo, ad esempio con un <Link to={`${PAROLANGELO_ROUTE}/festabolangelo`}>
                festabolangelo
            </Link>.<br/>
            Al momento puntiamo a raggiungere le <strong>{highestMultipleOf500(parolangeloCount)}</strong> parolangelo!
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
