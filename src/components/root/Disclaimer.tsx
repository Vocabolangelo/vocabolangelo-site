import React from "react";

interface DisclaimerState {
    isDisclaimerVisible: boolean;
}

export default class Disclaimer extends React.Component<any, DisclaimerState> {

    constructor(props: any) {
        super(props);
        this.state = {isDisclaimerVisible: true};
    }

    componentDidMount() {
        this.setState({
            isDisclaimerVisible: localStorage.getItem("disclaimerAccepted") !== "yes"
        });
    }

    disclaimerAccepted() {
        localStorage.setItem('disclaimerAccepted', "yes");
        this.setState({
            isDisclaimerVisible: false
        })
    }

    render() {
        if (this.state.isDisclaimerVisible) {
            return <div id="disclaimer"
                        style={{
                            position: "fixed",
                            bottom: 0,
                            left: 0,
                            width: "100%",
                            backgroundColor: "black",
                            color: "white",
                            padding: "10px 20px 10px 20px",
                            textAlign: "center",
                            fontSize: "14px",
                            zIndex: 999
                        }}>
                <h3 style={{color: "white"}}>&#9888; Disclaimer &#9888;</h3>
                <p>
                    Le parolangelo riportate all'interno di questo sito non dovrebbero mai essere utilizzate per fini
                    discriminatori o lesivi nei confronti di alcuna persona o gruppo. Tali parole sono create
                    esclusivamente per scopi di intrattenimento e non devono essere utilizzate al fine di offendere e
                    discriminare. Anche se alcune parolangelo potrebbero risultare inappropriate per alcuni visitatori
                    in quanto a contenuti e formulazione, ci teniamo a rimarcare che la nostra community desidera
                    promuovere un ambiente inclusivo, rispettoso e privo di discriminazioni di qualsiasi tipo.
                    In particolare, ci dissociamo categoricamente dal razzismo e da qualsiasi atto o comportamento
                    discriminatorio basato sulla razza, l'etnia, la religione, l'orientamento sessuale, l'identità di
                    genere, l'età o la disabilità.<br/>
                    Grazie e buon divertimento da parte dei Vocaboladmin.
                </p>
                <button onClick={_ => this.disclaimerAccepted()}
                        style={{backgroundColor: "white", border: "none", cursor: "pointer"}}>
                    Ho capito
                </button>
            </div>
        }
        return <></>
    }
}
