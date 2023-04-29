import React from 'react'

/**
 * Props of a Spotlight
 */
export default interface SpotlightProps {
    style: number
    optionalModifiers?: string[]
    imageUrl: string
    imageAlt: string
    children?: React.ReactNode;
}