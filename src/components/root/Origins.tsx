import {Link} from 'react-router-dom'
import {PAROLANGELO_ROUTE} from '../../routes/Parolangelo'

export default function Origins() {
    return (
        <>
            <section className="spotlight style1 orient-left content-align-left image-position-center onscroll-image-fade-in">
                <div className="content">
                    <h2>Le origini</h2>
                    <h4>Come è nato il Vocabolangelo?</h4>
                    <p>
                        A chi non è mai successo di inventare qualche parola per gioco?<br/>
                        Come potete immaginare, il mio nome è <strong>Angelo</strong> e sono il creatore di tutto questo.<br/>
                        <Link to={`${PAROLANGELO_ROUTE}/stancoso`}>Stancoso</Link>, <Link to={`${PAROLANGELO_ROUTE}/stravoloso`}>
                        stravoloso </Link>, <Link to={`${PAROLANGELO_ROUTE}/cafferillo`}>cafferillo </Link>,
                        sono alcune delle prime parole che ho inventato e che utilizzavo abitualmente con il mio gruppo di amici,
                        ora denominato <Link to={`${PAROLANGELO_ROUTE}/bewolla`}>Bewolla</Link>.<br/>
                        Quando anche loro hanno cominciato a creare parole per gioco, ho pensato di catalogarle, in modo che tutti
                        noi potessimo divertirci ad utilizzare termini originali e divertenti.
                    </p>
                </div>
                <div className="image">
                    <img src="/images/dictionary.jpg" alt="Un noioso vocabolario"/>
                </div>
            </section>
        </>
    )
}
