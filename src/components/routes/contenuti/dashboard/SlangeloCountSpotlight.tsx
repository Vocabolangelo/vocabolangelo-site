import {PAROLANGELO_ROUTE} from '../../concept/ConceptList'
import {Link} from 'react-router-dom'
import Spotlight from '../../../common/story/Spotlight'
import CountAndSoloCountProps from '../../../props/CountAndSoloCountProps'

export default function SlangeloCountSpotlight(props: CountAndSoloCountProps) {

    const {count, soloCount} = props

    return <Spotlight
        style={1}
        optionalModifiers={['orient-right', 'content-align-left', 'image-position-center', 'onscroll-image-fade-in']}
        imageUrl={'/images/pages.jpg'}
        imageAlt={'Pagine'}
    >
        <h1> {count} </h1>
        <p>
            Sono gli <Link to={`${PAROLANGELO_ROUTE}/slangelo`}>
            slangelo
            </Link> all&apos;interno del <strong> Vocabolangelo</strong>.<br/>
            Di questi, <strong> {count - soloCount} </strong> sono nati dalla collaborazione, mentre
            <strong> {soloCount}</strong> sono stati inventate dai singoli.<br/>
            Gli slangelo non sono così ricercati come le parolangelo, ma hanno sicuramente un posto nel
            nostro cuore!
        </p>
    </Spotlight>
}
