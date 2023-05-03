import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faHome, faBook, faFeather, faBarChart, faGamepad } from '@fortawesome/free-solid-svg-icons'
import {DASHBOARD_ROUTE} from '../routes/dashboard/DashboardIndex'
import {VOCABOLIERI_ROUTE} from '../routes/vocabolieri/Vocabolieri'
import {PAROLANGELO_ROUTE} from '../routes/parolangelo/Parolangelo'
import {GAMES_ROUTE} from '../routes/angelochi/AngelochiIndex'
export default function Header() {
    return <header style={{backgroundColor: 'black'}} className="is-preload">
        <div id="wrapper" className="divided">
            <div className="inner">
                <div className="index align-center">
                    <section>
                        <header>
                            <h2 style={{color: 'white'}}> Vocabolangelo </h2>
                        </header>
                        <div className="content">
                            <ul className="actions">
                                <li>
                                    <Link to={'/'} className="button primary">
                                        <FontAwesomeIcon icon={faHome} color="white" size="lg"/>  Home
                                    </Link>
                                </li>
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
                                    <Link to={DASHBOARD_ROUTE} className="button primary">
                                        <FontAwesomeIcon icon={faBarChart} color="white" size="lg"/>  Dashboard
                                    </Link>
                                </li>
                                <li>
                                    <Link to={GAMES_ROUTE} className="button primary">
                                        <FontAwesomeIcon icon={faGamepad} color="white" size="lg"/>  Angelochi
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
