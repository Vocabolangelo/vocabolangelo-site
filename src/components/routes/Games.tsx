import FrettolangeloSpotlight from '../games/FrettolangeloSpotlight'
import GamesSpotlight from '../games/GamesSpotlight'
import {Main} from '../common/Main'

export const GAMES_ROUTE = '/angelochi'
export default function Games() {
    return <Main>
        <GamesSpotlight/>
        <FrettolangeloSpotlight/>
    </Main>
}