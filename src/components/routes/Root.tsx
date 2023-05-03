import MainBanner from '../root/MainBanner'
import OriginSpotlight from '../root/OriginSpotlight'
import OntologySpotlight from '../root/OntologySpotlight'
import {Main} from '../common/Main'

export default function Root() {
    return <Main>
        <MainBanner/>
        <OriginSpotlight/>
        <OntologySpotlight/>
    </Main>
}
