import React, { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'

const pulse = keyframes`
  0% {
    opacity: 0.2;
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
  100% {
    opacity: 0.2;
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
  font-size: 5rem;
  color: black;
  text-transform: uppercase;
  animation: ${pulse} 1s infinite;
`

export default function LoadingScreen() {
    const [letter, setLetter] = useState('A')

    useEffect(() => {
        const interval = setInterval(() => {
            const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
            const randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)]
            setLetter(randomLetter)
        }, 500)

        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <LoadingScreenContainer>
            <Letter>{letter}.</Letter>
        </LoadingScreenContainer>
    )
}
