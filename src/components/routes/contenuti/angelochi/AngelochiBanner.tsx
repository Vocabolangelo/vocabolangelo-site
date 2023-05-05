import {Link} from 'react-router-dom'
import {PAROLANGELO_ROUTE} from '../../parolangelo/Parolangelo'
import Banner from '../../../common/story/Banner'

export default function AngelochiBanner() {
    return <Banner
        style={1}
        optionalModifiers={['orient-left', 'content-align-left', 'image-position-right', 'fullscreen', 'onload-image-fade-in', 'onload-content-fade-right']}
        imageUrl={'/images/game.jpg'}
        imageAlt={'Videogioco'}>
        <h1>Angelochi</h1>
        <p className={'major'}>
            Il Vocabolangelo dispone di una raccolta di Angelochi.<br/>
        </p>
        <p>
            <strong>Fun fact:</strong> Se incontrate dei bug durante il gioco mentre avrete a che fare con
            dei gatti, questi ultimi sono in realtà dei <Link to={`${PAROLANGELO_ROUTE}/buggatto`}> buggatti</Link>.
        </p>
    </Banner>
}
