import {PAROLANGELO_ROUTE} from '../../concept/ConceptList'
import {Link} from 'react-router-dom'
import Spotlight from '../../../common/story/Spotlight'
import CountAndSoloCountProps from '../../../props/CountAndSoloCountProps'

export default function ParolangeloCountSpotlight(props: CountAndSoloCountProps) {

    const {count, soloCount} = props

    function highestMultipleOf500(num : number): number {
        return Math.ceil(num / 500) * 500
    }

    return <Spotlight
        style={1}
        optionalModifiers={['orient-left', 'content-align-left', 'image-position-center', 'onscroll-image-fade-in']}
        imageUrl={'/images/bookAndGlasses.jpg'}
        imageAlt={'Libro e Occhiali'}
    >
        <h1> {count} </h1>
        <p>
            Sono le <Link to={`${PAROLANGELO_ROUTE}/parolangelo`}>
                parolangelo
            </Link> all&apos;interno del <strong> Vocabolangelo</strong>.<br/>
            Di queste, <strong> {count - soloCount} </strong> sono nate dalla collaborazione, mentre
            <strong> {soloCount}</strong> sono state inventate dai singoli.<br/>
            Quando ci saranno grandi traguardi tutti i <Link to={`${PAROLANGELO_ROUTE}/vocaboliere`}>
                vocabolieri
            </Link> festeggeranno in qualche modo, ad esempio con un <Link to={`${PAROLANGELO_ROUTE}/festabolangelo`}>
                festabolangelo
            </Link>.<br/>
            Al momento puntiamo a raggiungere le <strong>{highestMultipleOf500(count)}</strong> parolangelo!
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
