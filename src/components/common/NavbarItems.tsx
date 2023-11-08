import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFont, faQuoteLeft, faPhotoFilm, faPerson} from '@fortawesome/free-solid-svg-icons'
import {CONTENUTI_ROUTE} from '../routes/contenuti/ContenutiIndex'
import {VOCABOLIERI_ROUTE} from '../routes/vocabolieri/Vocabolieri'
import {SLANGELO_ROUTE} from '../routes/slangelo/SlangeloList'

export const navbarItems = [
    {
        icon: <FontAwesomeIcon icon={faFont} color={'white'}/>,
        title: 'Parolangelo',
        link: '/parolangelo',
    },
    {
        icon: <FontAwesomeIcon icon={faQuoteLeft} color={'white'}/>,
        title: 'Slangelo',
        link: SLANGELO_ROUTE,
    },
    {
        icon: <FontAwesomeIcon icon={faPerson} color={'white'}/>,
        title: 'Vocabolieri',
        link: VOCABOLIERI_ROUTE,
    },
    {
        icon: <FontAwesomeIcon icon={faPhotoFilm} color={'white'}/>,
        title: 'Contenuti',
        link: CONTENUTI_ROUTE,
    },
]
