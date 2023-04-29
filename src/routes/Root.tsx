import MainBanner from '../components/root/MainBanner'
import Disclaimer from '../components/root/Disclaimer'
import OriginSpotlight from '../components/root/OriginSpotlight'
import OntologySpotlight from '../components/root/OntologySpotlight'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'

export default function Root() {
    return (
        <>
            <div id="wrapper" className="divided">
                <Header/>
                <MainBanner/>
                <OriginSpotlight/>
                <OntologySpotlight/>
                <Footer/>
            </div>
            <Disclaimer/>
        </>
    )
}
