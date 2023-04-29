import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import FrettolangeloIntro from '../components/games/FrettolangeloIntro'
import GamesIntro from '../components/games/GamesIntro'

export const GAMES_ROUTE = '/angelochi'
export default function Games() {
    return <div id="wrapper" className="divided">
        <Header/>
        <GamesIntro/>
        <FrettolangeloIntro/>
        <Footer/>
    </div>
}