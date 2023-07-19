import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {selectorTheme} from '../../state/selectorTheme'

export default function Footer() {

    const theme = selectorTheme()
    const iconColor = theme.invert ? 'white' : 'black'

    return <footer className={`wrapper style1 align-center ${theme.toModifiers()}`}>
        <div className="inner">
            <ul className="icons">
                <li>
                    <Link to={'https://github.com/Vocabolangelo'}>
                        <FontAwesomeIcon icon={faGithub} color={iconColor} size="2xl"/>
                    </Link>
                </li>
                <li>
                    <Link to={'mailto:vocabolangelo@gmail.com'}>
                        <FontAwesomeIcon icon={faEnvelope} color={iconColor} size="2xl"/>
                    </Link>
                </li>
            </ul>
            <p>&copy;Vocabolangelo. Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
        </div>
    </footer>
}
