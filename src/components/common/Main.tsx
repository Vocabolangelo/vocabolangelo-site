import ChildrenProps from '../props/ChildrenProps'
import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Disclaimer from './Disclaimer'

/**
 * Top level component that include a Navbar and a Footer.
 * @param {ChildrenProps} props basic Props.
 */
export function Main(props: ChildrenProps) {
    return <>
        <Header/>
        <div id="wrapper" className="divided">
            {props.children}
            <Footer/>
        </div>
        <Disclaimer/>
    </>
}
