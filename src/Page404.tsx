import {Link} from 'react-router-dom'
import {PAROLANGELO_ROUTE} from './components/routes/concept/ConceptList'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import Spotlight from './components/common/story/Spotlight'

export function Page404() {
    return <>
        <Header/>
        <Spotlight
            style={1}
            optionalModifiers={['orient-left', 'content-align-left', 'image-position-center', 'onscroll-image-fade-in']}
            imageUrl={'/images/map.jpg'}
            imageAlt={'Mappa e bussola'}
        >
            <h1>404</h1>
            <h3>A tutti capita di prendere <Link to={`${PAROLANGELO_ROUTE}/scorciatroia`}>scorciatroie</Link> nella vita.</h3>
            <div className="actions stacked">
                <a href={'/'} className="button big wide smooth-scroll-middle">Home</a>
            </div>
        </Spotlight>
        <Footer/>
    </>
}
