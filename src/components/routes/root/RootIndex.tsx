import RootBanner from './RootBanner'
import OriginSpotlight from './OriginSpotlight'
import OntologySpotlight from './OntologySpotlight'
import {Main} from '../../common/Main'
import Pillars from './Pillars'

export default function RootIndex() {
    return <Main>
        <RootBanner/>
        <Pillars/>
        <OriginSpotlight/>
        <OntologySpotlight/>
    </Main>
}
