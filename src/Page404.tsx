import {Link} from 'react-router-dom'
import {PAROLANGELO_ROUTE} from './routes/Parolangelo'
import Header from './components/common/Header'
import Footer from './components/common/Footer'

export function Page404() {
    return <>
        <Header/>
        <section className="spotlight style1 orient-left content-align-left image-position-center onscroll-image-fade-in">
            <div className="content">
                <h1>404</h1>
                <h3>A tutti capita di prendere <Link to={`${PAROLANGELO_ROUTE}/scorciatroia`}>scorciatroie</Link> nella vita.</h3>
                <p>
                </p>
                <div className="actions stacked">
                    <a href={'/'} className="button big wide smooth-scroll-middle">
                            Home
                    </a>
                </div>
            </div>
            <div className="image">
                <img src="images/map.jpg" alt="Mappa e bussola"/>
            </div>
        </section>
        <Footer/>
    </>
}
