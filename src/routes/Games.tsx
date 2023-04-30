import FrettolangeloSpotlight from '../components/games/FrettolangeloSpotlight'
import GamesSpotlight from '../components/games/GamesSpotlight'
import {Main} from '../components/common/Main'

export const GAMES_ROUTE = '/angelochi'
export default function Games() {
    return <Main>
        <GamesSpotlight/>
        <FrettolangeloSpotlight/>
    </Main>
}