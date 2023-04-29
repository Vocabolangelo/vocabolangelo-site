import Spotlight from '../common/story/Spotlight'

/**
 * Spotlight Component that presents the fact that the Vocabolangelo is an Ontology.
 * @constructor
 */
export default function OntologySpotlight() {
    return <Spotlight
        style = {1}
        optionalModifiers = {['orient-right', 'content-align-left', 'image-position-center', 'onscroll-image-fade-in']}
        imageUrl={'/images/connection.jpg'} imageAlt={'Connessioni'}
    >
        <h2>Ontologia OWL</h2>
        <p>
            Il Vocabolangelo è un&apos;<strong>ontologia OWL</strong>.<br/>
            Le parolangelo e i vocabolieri sono individui utilizzabili in qualsiasi applicazione per il Web Semantico.<br/>
        </p>
        <div className="actions stacked">
            <a href="/schema/vocabolangelo.ttl" className="button">Link all&apos;Ontologia</a>
        </div>
    </Spotlight>
}
