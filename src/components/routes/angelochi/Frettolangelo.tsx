import React, { useState, useEffect } from 'react'
import {Concept} from '../../../rdf/types/Concept'
import {List} from '../../common/List'
import {Main} from '../../common/Main'

/**
 * A concept guessing game with a timer and a final score.
 */
export default function Frettolangelo() {
    const [availableWords, setAvailableWords] = useState<string[]>([])
    const [guessedWords, setGuessedWords] = useState<string[]>([])
    const [typedWord, setTypedWord] = useState('')
    const [timeRemaining, setTimeRemaining] = useState(60)
    const [isInputDisabled, setIsInputDisabled] = useState(true)

    useEffect(() => {
        Concept.all().then(c => {
            setAvailableWords(c.map(c => c.prefLabel))
            setIsInputDisabled(false)
        })
    }, [])

    useEffect(() => {
        if(timeRemaining !== 60) {
            setTimeout(() => {
                if(timeRemaining > 0) {
                    setTimeRemaining(timeRemaining - 1)
                } else {
                    setIsInputDisabled(true)
                }
            }, 1000)
        }
    }, [timeRemaining])

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const typedConcept = event.target.value
        setTypedWord(typedConcept)
        const foundWordIndex = availableWords.findIndex(
            c => c.toLowerCase() === typedConcept.toLowerCase()
        )
        if (foundWordIndex !== undefined && foundWordIndex !== -1) {
            const newGuessedWords = guessedWords.concat(availableWords[foundWordIndex])
            setGuessedWords(newGuessedWords)
            setAvailableWords(availableWords.filter((_,i) => i !== foundWordIndex))
            setTypedWord('')
            if(newGuessedWords.length === 1) {
                setTimeRemaining(timeRemaining - 1)
            }
        }
    }

    return <Main>
        <section className="wrapper style1 align-left">
            <div className="inner">
                <div>
                    <h1>{timeRemaining} secondi rimanenti</h1>
                    <p>Il timer partirà dopo aver inserito la prima parolangelo corretta.</p>
                    <form>
                        <label>
                            Digita una parolangelo:
                            <input type="text" value={typedWord} onChange={handleInputChange} disabled={isInputDisabled}/>
                        </label>
                    </form>
                    {timeRemaining === 0 && <h2>Punteggio finale: {guessedWords.length}</h2>}
                    {guessedWords.length > 0 && <>
                        <h5>Parolangelo indovinate:</h5>
                        <List
                            isOrdered={false}
                            list={guessedWords}
                            elementContent={(c) => <p> {c} </p>}
                        />
                    </>}
                </div>
            </div>
        </section>
    </Main>
}
