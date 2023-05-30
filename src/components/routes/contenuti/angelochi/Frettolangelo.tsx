import React, { useState, useEffect } from 'react'
import {Parolangelo} from '../../../../rdf/types/Parolangelo'
import {List} from '../../../common/List'
import {Main} from '../../../common/Main'

/**
 * A parolangelo guessing game with a timer and a final score.
 */
export default function Frettolangelo() {
    const [availableParolangelo, setAvailableParolangelo] = useState<string[]>([])
    const [guessedParolangelo, setGuessedParolangelo] = useState<string[]>([])
    const [typedParolangelo, setTypedParolangelo] = useState('')
    const [timeRemaining, setTimeRemaining] = useState(60)
    const [isInputDisabled, setIsInputDisabled] = useState(true)

    useEffect(() => {
        Parolangelo.all().then(p => {
            setAvailableParolangelo(p.map(p => p.prefLabel))
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
        const typedParolangelo = event.target.value
        setTypedParolangelo(typedParolangelo)
        const foundParolangeloIndex = availableParolangelo.findIndex(
            c => c.toLowerCase() === typedParolangelo.toLowerCase()
        )
        if (foundParolangeloIndex !== undefined && foundParolangeloIndex !== -1) {
            const newGuessedParolangelo = guessedParolangelo.concat(availableParolangelo[foundParolangeloIndex])
            setGuessedParolangelo(newGuessedParolangelo)
            setAvailableParolangelo(availableParolangelo.filter((_,i) => i !== foundParolangeloIndex))
            setTypedParolangelo('')
            if(newGuessedParolangelo.length === 1) {
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
                            <input type="text" value={typedParolangelo} onChange={handleInputChange} disabled={isInputDisabled}/>
                        </label>
                    </form>
                    {timeRemaining === 0 && <h2>Punteggio finale: {guessedParolangelo.length}</h2>}
                    {guessedParolangelo.length > 0 && <>
                        <h5>Parolangelo indovinate:</h5>
                        <List
                            isOrdered={false}
                            list={guessedParolangelo}
                            elementContent={(c) => <p> {c} </p>}
                        />
                    </>}
                </div>
            </div>
        </section>
    </Main>
}
