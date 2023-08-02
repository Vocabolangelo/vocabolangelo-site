import React, {useEffect, useState} from 'react'

/**
 * Disclaimer. I don't want to be in Jail.
 */
export default function Disclaimer() {

    const DISCLAIMER_ACCEPTED_KEY = 'disclaimerAccepted'

    const [isDisclaimerVisible, setIsDisclaimerVisible] = useState(false)

    useEffect(() => {
        setIsDisclaimerVisible(localStorage.getItem(DISCLAIMER_ACCEPTED_KEY) !== 'yes')
    }, [])

    if (!isDisclaimerVisible) {
        return null
    }

    return <div id="disclaimer">
        <h3 id="disclaimerTitle">&#9888; Disclaimer &#9888;</h3>
        <p>
            Le parolangelo riportate all&apos;interno di questo sito non dovrebbero mai essere utilizzate per fini
            discriminatori o lesivi nei confronti di alcuna persona o gruppo. Tali parole sono create
            esclusivamente per scopi di intrattenimento e non devono essere utilizzate al fine di offendere e
            discriminare. Anche se alcune parolangelo potrebbero risultare inappropriate per alcuni visitatori
            in quanto a contenuti e formulazione, ci teniamo a rimarcare che la nostra community desidera
            promuovere un ambiente inclusivo, rispettoso e privo di discriminazioni di qualsiasi tipo.
            In particolare, ci dissociamo categoricamente dal razzismo e da qualsiasi atto o comportamento
            discriminatorio basato sulla razza, l&apos;etnia, la religione, l&apos;orientamento sessuale,
            l&apos;identità di genere, l&apos;età o la disabilità.<br/>
            Grazie e buon divertimento da parte dei Vocaboladmin.
        </p>
        <button id="understoodButton" onClick={() => {
            localStorage.setItem(DISCLAIMER_ACCEPTED_KEY, 'yes')
            setIsDisclaimerVisible(false)
        }}>
            Ho capito
        </button>
    </div>
}
