import {Main} from '../../common/Main'
import ContenutiBanner from './ContenutiBanner'
import AngelochiSpotlight from './AngelochiSpotlight'
import DashboardSpotlight from './DashboardSpotlight'
import VocaboregolangeloSpotlight from './VocaboregolangeloSpotlight'

export const CONTENUTI_ROUTE = '/contenuti'

export default function ContenutiIndex() {
    return <Main>
        <ContenutiBanner/>
        <VocaboregolangeloSpotlight/>
        <AngelochiSpotlight/>
        <DashboardSpotlight/>
    </Main>
}