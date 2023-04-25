import {useEffect, useState} from "react";
import {Concept} from "../../rdf/types/Concept";

export default function WordCounter() {
    const [wordCount, setWordCount] = useState(0)

    useEffect(() => {
        Concept.all().then(concepts => {
            setWordCount(concepts.length)
        })
    }, [])

    return (
        <>
            <section className="spotlight style1 orient-right content-align-left image-position-center onscroll-image-fade-in"
                     id="first">
                <div className="content">
                    <h1> {wordCount} </h1>
                    <p>Sono le parole all'interno del Vocabolangelo. Puntiamo a raggiungere le 1000 parole.</p>
                    <ul className="actions stacked">
                        <li>
                            <a href="https://github.com/Vocabolangelo/" className="button">
                                Collabora
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="image">
                    <img src="images/math.jpg" alt="Matematica"/>
                </div>
            </section>
        </>
    );
}
