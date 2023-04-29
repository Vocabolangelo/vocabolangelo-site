import React from 'react'

/**
 * Props of a Section of the STORY Layout.
 */
export default interface StorySectionProps {
    style: number
    optionalModifiers?: string[]
    imageUrl: string
    imageAlt: string
    children?: React.ReactNode;
}