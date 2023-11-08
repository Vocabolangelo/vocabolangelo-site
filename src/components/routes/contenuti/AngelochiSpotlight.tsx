import Spotlight from '../../common/story/Spotlight'
import {Link} from 'react-router-dom'
import {ANGELOCHI_ROUTE} from './angelochi/AngelochiIndex'
import {CONTENUTI_ROUTE} from './ContenutiIndex'

export default function AngelochiSpotlight() {
    return <Spotlight
        style={1}
        optionalModifiers={['orient-left', 'content-align-left', 'image-position-right', 'fullscreen', 'onload-image-fade-in', 'onload-content-fade-right']}
        imageUrl={'/images/game.jpg'}
        imageAlt={'Videogioco'}>
        <h2>Angelochi</h2>
        <p className={'major'}>
            Prova i giochi <strong>in-browser</strong> in cui le protagoniste indiscusse solo le parolangelo.<br/>
        </p>
        <p>
            È fondamentale possedere almeno una conoscenza di base del Vocabolangelo per poter giocare in modo
            soddisfacente.
        </p>
        <div className="actions stacked">
            <Link to={CONTENUTI_ROUTE + ANGELOCHI_ROUTE} className="button">
                Il gioco
            </Link>
        </div>
    </Spotlight>
}
