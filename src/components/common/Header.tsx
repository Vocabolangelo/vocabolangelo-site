import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBook, faFeather, faPhotoFilm } from '@fortawesome/free-solid-svg-icons'
import {VOCABOLIERI_ROUTE} from '../routes/vocabolieri/Vocabolieri'
import {PAROLANGELO_ROUTE} from '../routes/concept/ConceptList'
import {CONTENUTI_ROUTE} from '../routes/contenuti/ContenutiIndex'

export default function Header() {
    return <header style={{backgroundColor: 'black'}} className="is-preload">
        <div id="wrapper" className="divided">
            <div className="inner">
                <div className="index align-center">
                    <section>
                        <header>
                            <Link to={'/'}>
                                <h2 style={{color: 'white'}}> Vocabolangelo </h2>
                            </Link>
                        </header>
                        <div className="content">
                            <ul className="actions">
                                <li>
                                    <Link to={PAROLANGELO_ROUTE} className="button primary">
                                        <FontAwesomeIcon icon={faBook} color="white" size="lg"/> Parolangelo
                                    </Link>
                                </li>
                                <li>
                                    <Link to={VOCABOLIERI_ROUTE} className="button primary">
                                        <FontAwesomeIcon icon={faFeather} color="white" size="lg"/>  Vocabolieri
                                    </Link>
                                </li>
                                <li>
                                    <Link to={CONTENUTI_ROUTE} className="button primary">
                                        <FontAwesomeIcon icon={faPhotoFilm} color="white" size="lg"/>  Contenuti
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </header>
}
