import ParolangeloCountSpotlight from './ParolangeloCountSpotlight'
import CreatorCountSpotlight from './CreatorCountSpotlight'
import LeaderBoard from './LeaderBoard'
import {Main} from '../../../common/Main'
import {useEffect, useState} from 'react'
import {Slangelo} from '../../../../rdf/types/Slangelo'
import {RDFStore} from '../../../../rdf/RDFStore'
import {vocang} from '../../../../rdf/prefixes'
import {Parolangelo} from '../../../../rdf/types/Parolangelo'
import SlangeloCountSpotlight from './SlangeloCountSpotlight'
import ConcettangeloCountSpotlight from './ConcettangeloCountSpotlight'

export const DASHBOARD_ROUTE = '/dashboard'

export default function DashboardIndex() {

    const [parolangeloCount, setParolangeloCount] = useState(0)
    const [soloParolangeloCount, setSoloParolangeloCount] = useState(0)

    const [slangeloCount, setSlangeloCount] = useState(0)
    const [soloSlangeloCount, setSoloSlangeloCount] = useState(0)

    useEffect(() => {
        Parolangelo.all().then(parolangelo => {
            setParolangeloCount(parolangelo.length)
            setSoloParolangeloCount(parolangelo.filter(p =>
                p.creators(node =>
                    (RDFStore.store.any(node, undefined, vocang.namespace('Vocaboliere')) !== null)
                )().length === 1
            ).length)
        })
        Slangelo.all().then(slangelo => {
            setSlangeloCount(slangelo.length)
            setSoloSlangeloCount(slangelo.filter(s =>
                s.creators(node =>
                    (RDFStore.store.any(node, undefined, vocang.namespace('Vocaboliere')) !== null)
                )().length === 1
            ).length)
        })
    }, [])

    return <Main>
        <ConcettangeloCountSpotlight
            count={parolangeloCount + slangeloCount}
            soloCount={soloParolangeloCount + soloSlangeloCount}
        />
        <ParolangeloCountSpotlight count={parolangeloCount} soloCount={soloParolangeloCount}/>
        <SlangeloCountSpotlight count={slangeloCount} soloCount={soloSlangeloCount}/>
        <CreatorCountSpotlight/>
        <LeaderBoard/>
    </Main>
}
