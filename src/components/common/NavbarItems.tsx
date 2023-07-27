import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFont, faQuoteLeft, faPhotoFilm} from '@fortawesome/free-solid-svg-icons'

const navbarItems = [
    {
        icon: <FontAwesomeIcon icon={faFont} color={'white'}/>,
        title: 'Parolangelo',
        link: '/parolangelo',
    },
    {
        icon: <FontAwesomeIcon icon={faQuoteLeft} color={'white'}/>,
        title: 'Slangelo',
        link: '/slangelo',
    },
    {
        icon: <FontAwesomeIcon icon={faPhotoFilm} color={'white'}/>,
        title: 'Contenuti',
        link: '/contenuti',
    },
]

export default navbarItems
