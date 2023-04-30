import WordCountSpotlight from '../components/dashboard/WordCountSpotlight'
import CreatorCountSpotlight from '../components/dashboard/CreatorCountSpotlight'
import LeaderBoard from '../components/dashboard/LeaderBoard'
import React from 'react'
import {Main} from '../components/common/Main'

export const DASHBOARD_ROUTE = '/dashboard'
export default function Dashboard() {
    return <Main>
        <WordCountSpotlight/>
        <CreatorCountSpotlight/>
        <LeaderBoard/>
    </Main>
}
