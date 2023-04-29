import Introduction from '../components/root/Introduction'
import Disclaimer from '../components/root/Disclaimer'
import Origins from '../components/root/Origins'
import Ontology from '../components/root/Ontology'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'

export default function Root() {
    return (
        <>
            <div id="wrapper" className="divided">
                <Header/>
                <Introduction/>
                <Origins/>
                <Ontology/>
                <Footer/>
            </div>
            <Disclaimer/>
        </>
    )
}
