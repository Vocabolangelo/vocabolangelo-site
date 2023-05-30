import ParolangeloCountSpotlight from './ParolangeloCountSpotlight'
import CreatorCountSpotlight from './CreatorCountSpotlight'
import LeaderBoard from './LeaderBoard'
import React from 'react'
import {Main} from '../../../common/Main'

export const DASHBOARD_ROUTE = '/dashboard'

export default function DashboardIndex() {
    return <Main>
        <ParolangeloCountSpotlight/>
        <CreatorCountSpotlight/>
        <LeaderBoard/>
    </Main>
}
