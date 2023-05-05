import {Main} from '../../common/Main'
import ContenutiBanner from './ContenutiBanner'
import AngelochiSpotlight from './AngelochiSpotlight'
import DashboardSpotlight from './DashboardSpotlight'

export const CONTENUTI_ROUTE = '/contenuti'

export default function ContenutiIndex() {
    return <Main>
        <ContenutiBanner/>
        <AngelochiSpotlight/>
        <DashboardSpotlight/>
    </Main>
}