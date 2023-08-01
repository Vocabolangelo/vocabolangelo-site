import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFont, faQuoteLeft, faPhotoFilm, faPerson} from '@fortawesome/free-solid-svg-icons'
import {PAROLANGELO_ROUTE, SLANGELO_ROUTE} from '../routes/concept/ConceptList'
import {CONTENUTI_ROUTE} from '../routes/contenuti/ContenutiIndex'
import {VOCABOLIERI_ROUTE} from '../routes/vocabolieri/Vocabolieri'

const navbarItems = [
    {
        icon: <FontAwesomeIcon icon={faFont} color={'white'}/>,
        title: 'Parolangelo',
        link: PAROLANGELO_ROUTE,
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

export default navbarItems
