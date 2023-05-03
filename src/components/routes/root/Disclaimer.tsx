import React, {useEffect, useState} from 'react'

export default function Disclaimer() {

    const [isDisclaimerVisible, setIsDisclaimerVisible] = useState(true)

    useEffect(() => {
        setIsDisclaimerVisible(localStorage.getItem('disclaimerAccepted') !== 'yes')
    }, [])


    function disclaimerAccepted() {
        localStorage.setItem('disclaimerAccepted', 'yes')
        setIsDisclaimerVisible(false)
    }

    if (isDisclaimerVisible) {
        return <div id="disclaimer"
            style={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                width: '100%',
                backgroundColor: 'black',
                color: 'white',
                padding: '10px 20px 10px 20px',
                textAlign: 'center',
                fontSize: '14px',
                zIndex: 999
            }}>
            <h3 style={{color: 'white'}}>&#9888; Disclaimer &#9888;</h3>
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
            <button onClick={() => disclaimerAccepted()}
                style={{backgroundColor: 'white', border: 'none', cursor: 'pointer'}}>
                Ho capito
            </button>
        </div>
    } else {
        return <></>
    }
}
