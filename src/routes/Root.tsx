import MainBanner from '../components/root/MainBanner'
import OriginSpotlight from '../components/root/OriginSpotlight'
import OntologySpotlight from '../components/root/OntologySpotlight'
import {Main} from '../components/common/Main'

export default function Root() {
    return <Main>
        <MainBanner/>
        <OriginSpotlight/>
        <OntologySpotlight/>
    </Main>
}
