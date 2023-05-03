import RootBanner from './RootBanner'
import OriginSpotlight from './OriginSpotlight'
import OntologySpotlight from './OntologySpotlight'
import {Main} from '../../common/Main'

export default function RootIndex() {
    return <Main>
        <RootBanner/>
        <OriginSpotlight/>
        <OntologySpotlight/>
    </Main>
}
