import {Link} from 'react-router-dom'
import {selectorTheme} from '../../state/selectorTheme'
import {BiCoffee, BiEnvelope, BiLogoGithub, BiLogoInstagram, BiLogoPaypal} from 'react-icons/bi'

export default function Footer() {

    const theme = selectorTheme()
    const iconColor = theme.invert ? 'white' : 'black'

    return <footer className={`wrapper style1 align-center ${theme.toModifiers()}`}>
        <div className="inner">
            <ul className="icons">
                <li>
                    <Link to={'https://github.com/Vocabolangelo'}>
                        <BiLogoGithub color={iconColor} size={45}/>
                    </Link>
                </li>
                <li>
                    <Link to={'https://www.instagram.com/vocabolangelo/'}>
                        <BiLogoInstagram color={iconColor} size={45}/>
                    </Link>
                </li>
                <li>
                    <Link to={'mailto:vocabolangelo@gmail.com'}>
                        <BiEnvelope color={iconColor} size={45}/>
                    </Link>
                </li>
                <li>
                    <Link to={'https://www.buymeacoffee.com/vocabolangelo'}>
                        <BiCoffee color={iconColor} size={45}/>
                    </Link>
                </li>
                <li>
                    <Link to={'https://www.paypal.me/angelofilaseta'}>
                        <BiLogoPaypal color={iconColor} size={45}/>
                    </Link>
                </li>
            </ul>
            <p>&copy;Vocabolangelo. Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
        </div>
    </footer>
}
