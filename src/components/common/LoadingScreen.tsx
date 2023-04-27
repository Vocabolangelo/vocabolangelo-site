import React, { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import {RDFStore} from '../../rdf/RDFStore'

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
  background-color: white;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Letter = styled.h1`
  font-family: 'Sriracha', cursive;
  font-size: 4rem;
  color: black;
  text-transform: uppercase;
  animation: ${pulse} 0.75s infinite;
`

export default function LoadingScreen() {
    const [isStoreEmpty, setIsStoreEmpty] = useState(true)

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
            <LoadingScreenContainer>
                <Letter>A.</Letter>
            </LoadingScreenContainer>
        )
    } else {
        return <></>
    }
}
