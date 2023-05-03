import {Link} from 'react-router-dom'
import {PAROLANGELO_ROUTE} from '../parolangelo/Parolangelo'
import {GAMES_ROUTE} from './AngelochiIndex'
import Spotlight from '../../common/story/Spotlight'

export default function FrettolangeloSpotlight() {
    return <Spotlight
        style={1}
        optionalModifiers={['orient-right', 'content-align-left', 'image-position-center', 'onscroll-image-fade-in']}
        imageUrl={'/images/hourglass.jpg'}
        imageAlt={'Clessidra'}
    >
        <h2>Frettolangelo</h2>
        <h4>Per fortuna puoi scrivere in <Link to={`${PAROLANGELO_ROUTE}/capslockello`}>capslockello</Link>.</h4>
        <p>
            Il <Link to={`${PAROLANGELO_ROUTE}/frettolangelo`}>frettolangelo</Link> è un gioco che
            metterà alla prova la vostra memoria e la vostra capacità di stare sotto pressione.
        </p>
        <div className="actions stacked">
            <Link to={`${GAMES_ROUTE}/frettolangelo`} className="button"> Gioca </Link>
        </div>
    </Spotlight>
}
