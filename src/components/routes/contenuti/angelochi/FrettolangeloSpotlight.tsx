import {Link} from 'react-router-dom'
import {ANGELOCHI_ROUTE} from './AngelochiIndex'
import Spotlight from '../../../common/story/Spotlight'
import {CONTENUTI_ROUTE} from '../ContenutiIndex'

import {PAROLANGELO_ROUTE} from '../../concept/ConceptList'

export default function FrettolangeloSpotlight() {
    return <Spotlight
        style={1}
        optionalModifiers={['orient-right', 'content-align-left', 'image-position-center', 'onscroll-image-fade-in']}
        imageUrl={'/images/time.jpg'}
        imageAlt={'Clessidra'}
    >
        <h2>Frettolangelo</h2>
        <p className={'major'}>Per fortuna puoi scrivere in <Link to={`${PAROLANGELO_ROUTE}/capslockello`}>capslockello</Link>.</p>
        <p>
            Il <Link to={`${PAROLANGELO_ROUTE}/frettolangelo`}>frettolangelo</Link> è un gioco che
            metterà alla prova la vostra memoria e la vostra capacità di stare sotto pressione.
        </p>
        <div className="actions stacked">
            <Link to={`${CONTENUTI_ROUTE}${ANGELOCHI_ROUTE}/frettolangelo`} className="button"> Gioca </Link>
        </div>
    </Spotlight>
}
