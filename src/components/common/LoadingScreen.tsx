import React, {useEffect, useState} from 'react'
import styled, {keyframes} from 'styled-components'
import {RDFStore} from '../../rdf/RDFStore'
import {VocabolangeloTheme} from '../../classes/VocabolangeloTheme'
import {useSelector} from 'react-redux'
import {State} from '../../state/State'

const pulse = keyframes`
  0% {

  }
  50% {
    opacity: 1;
    transform: scale(1.1);
  }
  100% {
  }
`

const LoadingScreenContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Letter = styled.h1`
  font-size: 4rem;
  text-transform: uppercase;
  animation: ${pulse} 0.75s infinite;
`

export default function LoadingScreen() {

    const vocabolangeloTheme: VocabolangeloTheme = useSelector((state: State) => state.theme)

    const [isStoreEmpty, setIsStoreEmpty] = useState(true)

    const letterColor = vocabolangeloTheme == VocabolangeloTheme.WHITE ? 'black' : 'white'
    const backgroundColor = vocabolangeloTheme == VocabolangeloTheme.WHITE ? 'white' : '#121212'

    useEffect(() => {
        const interval = setInterval(() => {
            if(RDFStore.store.statements.length !== 0) {
                setIsStoreEmpty(false)
            }
        }, 100)
        return () => {
            clearInterval(interval)
        }
    }, [])

    if(isStoreEmpty) {
        return (
            <LoadingScreenContainer style={{backgroundColor: backgroundColor}}>
                <Letter style={{color: letterColor}}>A.</Letter>
            </LoadingScreenContainer>
        )
    } else {
        return <></>
    }
}
