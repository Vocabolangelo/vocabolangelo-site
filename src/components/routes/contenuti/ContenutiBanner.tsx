import Banner from '../../common/story/Banner'
import {Link} from 'react-router-dom'

import {PAROLANGELO_ROUTE} from '../concept/ConceptList'

export default function ContenutiBanner() {
    return <Banner
        style={1}
        optionalModifiers={['orient-left', 'content-align-left', 'image-position-right', 'fullscreen', 'onload-image-fade-in', 'onload-content-fade-right']}
        imageUrl={'/images/content.jpg'}
        imageAlt={'Cafferillo'}>
        <h1>Contenuti aggiuntivi</h1>
        <p className={'major'}>
            Il Vocabolangelo è molto più di una raccolta di parolangelo.<br/>
        </p>
        <p>
            Al momento non ci sono molti contenuti, ma magari un giorno, anche grazie alle idee della community, questo luogo sarà pieno
            di iniziative divertenti. Ad esempio, non desiderate sapere come creare un <Link to={`${PAROLANGELO_ROUTE}/cafferillo`}>cafferillo</Link> perfetto?
        </p>
    </Banner>
}
