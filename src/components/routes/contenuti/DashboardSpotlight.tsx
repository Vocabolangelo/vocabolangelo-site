import Spotlight from '../../common/story/Spotlight'

import {Link} from 'react-router-dom'
import {DASHBOARD_ROUTE} from './dashboard/DashboardIndex'
import {CONTENUTI_ROUTE} from './ContenutiIndex'

export default function DashboardSpotlight() {
    return <Spotlight
        style={1}
        optionalModifiers={['orient-right', 'content-align-left', 'image-position-right', 'fullscreen', 'onload-image-fade-in', 'onload-content-fade-right']}
        imageUrl={'/images/data.jpg'}
        imageAlt={'Grafichetto carino'}>
        <h2>Dashboard</h2>
        <p className={'major'}>
            Grazie a queste utilità potrete scoprire dati interessanti riguardo il Vocabolangelo.
        </p>
        <p>
            Chi è il vocaboliere più influente? Quante parolangelo esistono?
        </p>
        <Link to={CONTENUTI_ROUTE + DASHBOARD_ROUTE} className="button">
            Analizza
        </Link>
    </Spotlight>
}