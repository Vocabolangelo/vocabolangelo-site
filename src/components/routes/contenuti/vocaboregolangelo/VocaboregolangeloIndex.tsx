import {Main} from '../../../common/Main'
import React from 'react'
import InnerWrapper from '../../../common/story/InnerWrapper'
import Wrapper from '../../../common/story/Wrapper'
import {Link} from 'react-router-dom'
import {PAROLANGELO_ROUTE} from '../../parolangelo/Parolangelo'

export const VOCABOREGOLANGELO_ROUTE = '/vocaboregolangelo'

export default function VocaboregolangeloIndex() {
    return <Wrapper optionalModifiers={['divided']}>
        <InnerWrapper style={1}>
            <header>
                <h1>Vocaboregolangelo</h1>
                <p>
                    Al fine di creare Parolangelo di qualità, si chiede ai gentili Vocabolieri di rispettare le
                    seguenti indicazioni al fine di vocabolangelizzare in modo efficace.
                </p>
            </header>
            <div className="index align-left">
                <div>
                    <ol>
                        <li>
                            Tutte le Vocaboregolangelo, inclusa questa e tutte quelle che seguono, sono in
                            realtà <Link to={`${PAROLANGELO_ROUTE}/raggirula`}>raggirule</Link>.
                        </li>
                        <li>
                            Chi possiede il Vocabolangelo può scegliere di infrangere o far infrangere una o più
                            Vocaboregolangelo se lo ritiene necessario o utile.
                        </li>
                        <li>
                            Le Vocaboregolangelo sono retroattive.
                            In un qualsiasi momento una parolangelo potrebbe venir rivalutata a seguito dell&apos;
                            introduzione di nuove vocaboregolangelo.
                            <div className="box">
                                <p>
                                    Spesso le parolangelo che infrangono vocaboregolangelo che non erano in vigore nel momento
                                    del concepimento non verranno modificate o eliminate, ma in casi estremi si contatterà
                                    prima di tutto il vocaboliere per cercare di mediare.
                                </p>
                            </div>
                        </li>
                        <li>
                            Ogni Parolangelo è benvenuta all&apos;interno del Vocabolangelo. Nessuna parola
                            può essere rifiutata dai Vocaboladmin senza una valida motivazione.
                        </li>
                        <li>
                            Per essere presa in considerazione, una parolangelo deve soddisfare i seguenti requisiti:
                            <ol>
                                <li>
                                    <strong>Innovativa</strong>: La coppia parola-definizione non deve già esistere nella
                                    lingua italiana.
                                    <div className="box">
                                        <p>
                                            È comunque possibile creare sinonimi di parole italiane o definizioni alternative,
                                            come per esempio <Link to={`${PAROLANGELO_ROUTE}/psichedelica`}>Psichedelica</Link>.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <strong>Compatta</strong>: La parolangelo non deve contenere spazi.
                                    Parolangelo divise con un separatore come il trattino (-) vengono spesso prese in
                                    considerazione ma non per forza accettate.
                                    <div className="box">
                                        <p>
                                            Per esempio, un vocaboliere non può inventare un ipotetica parolangelo
                                            &quot;Anatomia Patatosa&quot;. In questo caso è consigliabile cercare di
                                            &quot;mischiare&quot; le parole in una sola.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <strong>Generica</strong>: La parolangelo non deve riferirsi ad un individuo o ad un
                                    oggetto particolare in maniera troppo specifica. Questo è vero soltanto per la definizione.
                                    <div className="box">
                                        <p>
                                            Per esempio, un vocaboliere non può inventare un ipotetica parolangelo &quot;Mariossare&quot;
                                            con definizione &quot;Le azioni compiute da un individuo di nome Marco Rossi&quot;, in quanto
                                            troppo legate ad una persona specifica. In questi casi è comunque possibile generalizzare,
                                            per esempio cambiando la definizione in &quot;Le azioni compiute da un individuo con un nome
                                            ed un cognome estremamente comune e diffuso.&quot;
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <strong>Semplice</strong>: La parolangelo deve essere inserita nella sua forma più semplice,
                                    ad esempio al singolare in caso di sostantivo, all&apos;infinito in caso di verbo, etc.
                                    <div className="box">
                                        <p>
                                            Per esempio, non è possibile aggiungere la parolangelo nella forma &quot;polandoretti&quot;
                                            se il singolare è polandoretto. Non è possibile inserire un ipotetico verbo &quot;calaromarsi&quot;,
                                            ma è possibile inserire  &quot;calaromare&quot;.
                                            È possibile inserire coniugazioni specifiche di un verbo solo e solamente
                                            se mancanti nella lingua italiana,
                                        </p>
                                    </div>
                                </li>
                            </ol>
                        </li>
                        <li>
                            Oltre ai parametri presentati nella Vocaboregolangelo precedente, un Vocaboladmin può rifiutare una
                            Parolangelo anche se non la trova di suo gusto o non adatta per altri motivi.
                        </li>
                    </ol>
                </div>
            </div>
        </InnerWrapper>
    </Wrapper>
}