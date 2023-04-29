import {Link} from 'react-router-dom'
import {PAROLANGELO_ROUTE} from '../../routes/Parolangelo'
import Spotlight from '../common/story/Spotlight'

export default function GamesSpotlight() {
    return <Spotlight
        style = {1}
        optionalModifiers = {['orient-right', 'content-align-left', 'image-position-center', 'onscroll-image-fade-in']}
        imageUrl={'/images/game.jpg'}
        imageAlt={'Videogioco'}
    >
        <h2>Angelochi</h2>
        <p className={'major'}>
            Il Vocabolangelo dispone di una raccolta di Angelochi.<br/>
        </p>
        <p>
            <strong>Fun fact:</strong> Se incontrate dei bug durante il gioco mentre avrete a che fare con
            dei gatti, questi ultimi sono in realtà dei <Link to={`${PAROLANGELO_ROUTE}/buggatto`}> buggatti</Link>.
        </p>
    </Spotlight>
}
