import WordCountSpotlight from '../dashboard/WordCountSpotlight'
import CreatorCountSpotlight from '../dashboard/CreatorCountSpotlight'
import LeaderBoard from '../dashboard/LeaderBoard'
import React from 'react'
import {Main} from '../common/Main'

export const DASHBOARD_ROUTE = '/dashboard'
export default function Dashboard() {
    return <Main>
        <WordCountSpotlight/>
        <CreatorCountSpotlight/>
        <LeaderBoard/>
    </Main>
}
