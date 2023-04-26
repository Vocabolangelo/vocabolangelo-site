import {PAROLANGELO_ROUTE} from '../../routes/Parolangelo'
import {Link} from 'react-router-dom'

export default function Introduction() {
    return (
        <>
            <section
                className="banner style1 orient-left content-align-left image-position-right fullscreen onload-image-fade-in onload-content-fade-right">
                <div className="content">
                    <h1>Il Vocabolangelo</h1>
                    <p className="major" style={{paddingBottom: '1rem'}}>
                        Il <strong>Vocabolangelo</strong> è un documento strutturato che cataloga e definisce parole
                        (anche chiamate <Link to={`${PAROLANGELO_ROUTE}/parolangelo`}>parolangelo</Link>)
                        inventate da persone ordinarie, e quindi non riportate in un normale vocabolario.<br/>
                    </p>
                    <p>
                        Chiunque abbia inventato almeno una parola del Vocabolangelo viene definito <Link to={`${PAROLANGELO_ROUTE}/vocaboliere`}>
                            vocaboliere
                        </Link>.
                    </p>
                    <div className="actions stacked">
                        <a href={PAROLANGELO_ROUTE} className="button big wide smooth-scroll-middle">
                            Scopri le parolangelo
                        </a>
                    </div>
                </div>
                <div className="image">
                    <img src="/images/vocabolangelo.png" alt="Vocabolangelo Logo"/>
                </div>
            </section>
        </>
    )
}
