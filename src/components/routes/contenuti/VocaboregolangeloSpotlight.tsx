import Spotlight from '../../common/story/Spotlight'
import {Link} from 'react-router-dom'
import {CONTENUTI_ROUTE} from './ContenutiIndex'
import {VOCABOREGOLANGELO_ROUTE} from './vocaboregolangelo/VocaboregolangeloIndex'

import {PAROLANGELO_ROUTE} from '../concept/ConceptList'

export default function VocaboregolangeloSpotlight() {
    return <Spotlight
        style={1}
        optionalModifiers={['orient-right', 'content-align-left', 'image-position-center', 'fullscreen', 'onload-image-fade-in', 'onload-content-fade-right']}
        imageUrl={'/images/judgement.jpg'}
        imageAlt={'Giudizio finale'}>
        <h2>Vocaboregolangelo</h2>
        <p className={'major'}>
            Lo scopo delle Vocaboregolangelo è cercare di limitare il numero di <Link to={`${PAROLANGELO_ROUTE}/parolarcangelo`}>
                Parolarcangelo
            </Link>.
        </p>
        <p>
            È importante consultare questa pagina prima di sottoporre la tua prima Parolangelo.
        </p>
        <div className="actions stacked">
            <Link to={CONTENUTI_ROUTE + VOCABOREGOLANGELO_ROUTE} className="button">
                Non voglio creare Caos
            </Link>
        </div>
    </Spotlight>
}