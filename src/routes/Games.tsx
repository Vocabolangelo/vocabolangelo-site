import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import FrettolangeloSpotlight from '../components/games/FrettolangeloSpotlight'
import GamesSpotlight from '../components/games/GamesSpotlight'

export const GAMES_ROUTE = '/angelochi'
export default function Games() {
    return <div id="wrapper" className="divided">
        <Header/>
        <GamesSpotlight/>
        <FrettolangeloSpotlight/>
        <Footer/>
    </div>
}