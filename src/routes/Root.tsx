import Introduction from "../components/root/Introduction";
import WordCounter from "../components/root/WordCounter";
import Disclaimer from "../components/root/Disclaimer";
import Milestone from "../components/root/Milestone";
import Ontology from "../components/root/Ontology";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

export default function Root() {
    return (
        <>
            <Header/>
            <section className="banner style3 orient-left content-align-left image-position-right fullscreen onload-image-fade-in onload-content-fade-right">
                <div className="content">
                    <h1>ATTENZIONE</h1>
                    <p className="major">
                        Il Vocabolangelo è momentaneamente sotto <strong>manutenzione</strong>.<br/>
                        Al momento il sito non è stabile e potrebbe presentare diversi bug.<br/>
                    </p>
                    <ul className="actions stacked">
                        <li>
                            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="button big wide smooth-scroll-middle">
                                Il gioco
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="image">
                    <img src="/images/danger.png" alt="Pericolo"/>
                </div>
            </section>
            <Disclaimer/>
            <Introduction/>
            <WordCounter/>
            <Milestone/>
            <Ontology/>
            <Footer/>
        </>
    );
}
