import WordCountSpotlight from './WordCountSpotlight'
import CreatorCountSpotlight from './CreatorCountSpotlight'
import LeaderBoard from './LeaderBoard'
import React from 'react'
import {Main} from '../../../common/Main'

export const DASHBOARD_ROUTE = '/dashboard'

export default function DashboardIndex() {
    return <Main>
        <WordCountSpotlight/>
        <CreatorCountSpotlight/>
        <LeaderBoard/>
    </Main>
}
