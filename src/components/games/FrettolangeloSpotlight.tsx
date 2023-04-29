import {Link} from 'react-router-dom'
import {PAROLANGELO_ROUTE} from '../../routes/Parolangelo'
import {GAMES_ROUTE} from '../../routes/Games'
import Spotlight from '../common/story/Spotlight'

export default function FrettolangeloSpotlight() {
    return <Spotlight
        style={1}
        optionalModifiers={['orient-left', 'content-align-left', 'image-position-center', 'onscroll-image-fade-in']}
        imageUrl={'/images/hourglass.jpg'}
        imageAlt={'Clessidra'}
    >
        <h2>Frettolangelo</h2>
        <h4>Quanto durerai?</h4>
        <p>
            Il <Link to={`${PAROLANGELO_ROUTE}/frettolangelo`}> frettolangelo </Link> è un gioco che
            metterà alla prova la vostra memoria e la vostra capacità di stare sotto pressione.
        </p>
        <div className="actions stacked">
            <Link to={`${GAMES_ROUTE}/frettolangelo`} className="button"> Gioca </Link>
        </div>
    </Spotlight>
}
