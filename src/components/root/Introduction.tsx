import {PAROLANGELO_ROUTE} from "../../routes/Parolangelo";

export default function Introduction() {
    return (
        <>
            <section
                className="banner style1 orient-left content-align-left image-position-right fullscreen onload-image-fade-in onload-content-fade-right">
                <div className="content">
                    <h1>Il Vocabolangelo</h1>
                    <p className="major">
                        Il Vocabolangelo è un documento strutturato che cataloga e definisce parole (o parolangelo)
                        inventate da persone ordinarie, e quindi non riportate in un normale vocabolario.
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
    );
}
