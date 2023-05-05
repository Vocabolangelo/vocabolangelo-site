import FrettolangeloSpotlight from './FrettolangeloSpotlight'
import AngelochiBanner from './AngelochiBanner'
import {Main} from '../../../common/Main'

export const ANGELOCHI_ROUTE = '/angelochi'

export default function AngelochiIndex() {
    return <Main>
        <AngelochiBanner/>
        <FrettolangeloSpotlight/>
    </Main>
}