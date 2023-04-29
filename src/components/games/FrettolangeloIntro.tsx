import {Link} from 'react-router-dom'
import {PAROLANGELO_ROUTE} from '../../routes/Parolangelo'
import {GAMES_ROUTE} from '../../routes/Games'

export default function FrettolangeloIntro() {
    return (
        <>
            <section className="spotlight style1 orient-left content-align-left image-position-center onscroll-image-fade-in">
                <div className="content">
                    <h2>Frettolangelo</h2>
                    <h4>Quanto durerai?</h4>
                    <p>
                        Il <Link to={`${PAROLANGELO_ROUTE}/frettolangelo`}> frettolangelo </Link> è un gioco che
                        metterà alla prova la vostra memoria e la vostra capacità di stare sotto pressione.
                    </p>
                    <div className="actions stacked">
                        <a href={`${GAMES_ROUTE}/frettolangelo`} className="button">Gioca</a>
                    </div>
                </div>
                <div className="image">
                    <img src="/images/hourglass.jpg" alt="Clessidra"/>
                </div>
            </section>
        </>
    )
}
