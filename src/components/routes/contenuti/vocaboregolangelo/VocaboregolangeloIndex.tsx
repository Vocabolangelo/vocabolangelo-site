import InnerWrapper from '../../../common/story/InnerWrapper'
import Wrapper from '../../../common/story/Wrapper'
import {Link} from 'react-router-dom'


import {PAROLANGELO_ROUTE} from '../../concept/ConceptList'
import ChildrenProps from '../../../props/ChildrenProps'

export const VOCABOREGOLANGELO_ROUTE = '/regole'

export default function regoleIndex() {
    return <Wrapper optionalModifiers={['divided']}>
        <InnerWrapper style={1}>
            <header>
                <h1>Vocaboregolangelo</h1>
                <p>
                    Al fine di creare Parolangelo e Slangelo di qualità, si chiede ai gentili Vocabolieri di rispettare le
                    seguenti indicazioni al fine di vocabolangelizzare in modo efficace.
                </p>
            </header>
            <div className="index align-left">
                <div>
                    <ol>
                        <li>
                            Tutte le regole che seguono, inclusa questa, sono in realtà <Link to={`${PAROLANGELO_ROUTE}/raggirula`}>raggirule</Link>.
                        </li>
                        <li>
                            Chi possiede il Vocabolangelo può scegliere di infrangere o far infrangere una o più
                            regole se lo ritiene necessario o utile.
                        </li>
                        <li>
                            Le regole sono retroattive.
                            In un qualsiasi momento una parolangelo potrebbe venir rivalutata a seguito dell&apos;
                            introduzione di nuove regole.
                            <Box>
                                Spesso le parolangelo che infrangono regole che non erano in vigore nel momento
                                del concepimento non verranno modificate o eliminate, ma in casi estremi si contatterà
                                prima di tutto l&apos;autore per cercare di mediare.
                            </Box>
                        </li>
                        <li>
                            Per essere presa in considerazione per l&apos;aggiunta, una Parolangelo (o uno Slangelo) deve soddisfare i seguenti requisiti:
                            <ol>
                                <li>
                                    <strong>Innovativa</strong>: La coppia parola-definizione non deve già esistere nella
                                    lingua italiana, includendo il gergo di fantasia comune.
                                    <Box>
                                        È comunque possibile creare sinonimi di parole italiane o definizioni alternative,
                                        come per esempio <Link to={`${PAROLANGELO_ROUTE}/psichedelica`}>Psichedelica</Link>.
                                        Non è invece 
                                    </Box>
                                </li>
                                <li>
                                    <strong>Compatta</strong>: Le parolangelo non possono contenere spazi a differenza degli Slangelo, che sono stati introdotti appositamente al fine di garantire la possibilità di creare parole composte.
                                    Parolangelo divise con un separatore come il trattino (-) vengono spesso prese in considerazione ma non per forza accettate nello stato in cui vengono proposte.
                                    <Box>
                                            Di conseguenza un vocaboliere può inventare tranquillamente un ipotetico Slangelo
                                            &quot;Anatomia Patatosa&quot;, ma potrebbe farla diventare una Parolangelo solamente cercando di &quot;mischiare&quot; le parole proposte in una sola.
                                    </Box>
                                </li>
                                <li>
                                    <strong>Generica</strong>: La parolangelo non deve riferirsi ad un individuo o ad un&apos;entità particolare in maniera troppo specifica. Questo è vero soltanto per la definizione e non per la parola stessa.
                                    <Box>
                                            Per esempio, un vocaboliere non può inventare un ipotetica parolangelo &quot;Mariossare&quot;
                                            con definizione &quot;Le azioni compiute da un individuo di nome Marco Rossi&quot;, in quanto
                                            troppo legate ad una persona specifica. In questi casi è comunque possibile generalizzare,
                                            per esempio cambiando la definizione in &quot;Le azioni compiute da un individuo con un nome
                                            ed un cognome estremamente comune e diffuso.&quot;
                                    </Box>
                                    <Box>
                                        Il massimo grado di specificità concesso è a livello di città.
                                        Sono quindi ammesse parolangelo come <Link to={`${PAROLANGELO_ROUTE}/velletreno`}>Velletreno</Link> e <Link to={`${PAROLANGELO_ROUTE}/criminese`}>Criminese</Link>.
                                    </Box>
                                </li>
                                <li>
                                    <strong>Semplice</strong>: La parolangelo deve essere inserita nella sua forma più semplice,
                                    ad esempio al singolare in caso di sostantivo, all&apos;infinito in caso di verbo, etc.
                                    <Box>
                                            Per esempio, non è possibile aggiungere la parolangelo nella forma &quot;polandoretti&quot;
                                            se il singolare è polandoretto. Non è possibile inserire un ipotetico verbo &quot;calaromarsi&quot;,
                                            ma è possibile inserire  &quot;calaromare&quot;.
                                    </Box>
                                </li>
                            </ol>
                        </li>
                        <li>
                            È sempre possibile rifiutare una Parolangelo o uno Slangelo per motivi specificatamente legati alla qualità del contenuto e al gusto personale
                        </li>
                        <li>
                            L&apos;autore di almeno una Parolangelo o Slangelo diventa Vocaboliere per sempre.
                        </li>
                        <li>
                            Non esiste un limite massimo al numero di Vocabolieri autori di una Parolangelo o di uno Slangelo. Nessun autore è più importante degli altri; a fini statistici Parolangelo e Slangelo con più di un creatore pesano in maniera pari e proporzionale il contributo degli autori.
                        </li>
                        <li>
                            Per essere considerato creatore (o autore) di una Parolangelo o Slangelo, un Vocaboliere deve aver contribuito, in maniera anche minima, alla formulazione della parola, o composizione di parole, o della relativa definizione. La crezione di un eventuale esempi non rende un Vocaboliere anche creatore della parola per cui lo propone se conseguente alla creazione.
                        </li>
                        <li>
                            I <Link to={`${PAROLANGELO_ROUTE}/parolassita`}>parolassiti</Link> sono ammessi e tollerati, ma il Vocabolangelo non si assume nessuna responsabilità per eventuali risse o <Link to={`${PAROLANGELO_ROUTE}/semirissa`}>semirisse</Link> che possono avvenire tra gli autori a causa di motivazioni correlate.
                        </li>
                    </ol>
                </div>
            </div>
        </InnerWrapper>
    </Wrapper>
}


function Box(props: ChildrenProps) {
    return <div className="box">
        <p>
            {props.children}
        </p>
    </div>
}