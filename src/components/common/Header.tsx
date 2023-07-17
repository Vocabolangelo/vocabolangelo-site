import Sidebar from './Sidebar'
import Navbar from './Navbar'
import {useState} from 'react'

export default function Header() {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return <>
        <Navbar toggle={toggle}/>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
    </>
}
