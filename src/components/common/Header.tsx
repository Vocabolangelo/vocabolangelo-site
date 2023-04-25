import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faHome, faBook, faFeather } from '@fortawesome/free-solid-svg-icons'
export default function Header() {
    return <header style={{backgroundColor: "black"}} className="is-preload">
        <div id="wrapper" className="divided">
            <div className="inner">
                <div className="index align-center">
                    <section>
                        <header>
                            <h2 style={{color: "white"}}> Vocabolangelo </h2>
                        </header>
                        <div className="content">
                            <ul className="actions">
                                <li>

                                    <Link to={"/"} className="button primary">
                                        <FontAwesomeIcon icon={faHome} color="white" size="lg"/>  Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"/parolangelo"} className="button primary">
                                        <FontAwesomeIcon icon={faBook} color="white" size="lg"/> Parolangelo
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"/vocabolieri"} className="button primary">
                                        <FontAwesomeIcon icon={faFeather} color="white" size="lg"/>  Vocabolieri
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



