import {Link} from 'react-router-dom'
import {PAROLANGELO_ROUTE} from '../../routes/Parolangelo'

export default function GamesIntro() {
    return (
        <>
            <section className="spotlight style1 orient-right content-align-left image-position-center onscroll-image-fade-in">
                <div className="content">
                    <h2>Angelochi</h2>
                    <p className={'major'}>
                        Il Vocabolangelo dispone di una raccolta di Angelochi.<br/>
                    </p>
                    <p>
                        <strong>Fun fact:</strong> Se incontrate dei bug durante il gioco mentre avrete a che fare con
                        dei gatti, questi ultimi sono in realtà dei <Link to={`${PAROLANGELO_ROUTE}/buggatto`}> buggatti</Link>.
                    </p>
                </div>
                <div className="image">
                    <img src="/images/game.jpg" alt="Videogioco"/>
                </div>
            </section>
        </>
    )
}
