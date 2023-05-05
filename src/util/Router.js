import {createBrowserRouter} from 'react-router-dom'
import RootIndex from '../components/routes/root/RootIndex'
import Parolangelo, {PAROLANGELO_ROUTE} from '../components/routes/parolangelo/Parolangelo'
import {ConceptLayout} from '../components/routes/parolangelo/ConceptLayout'
import React from 'react'
import Vocabolieri, {VOCABOLIERI_ROUTE} from '../components/routes/vocabolieri/Vocabolieri'
import {PersonLayout} from '../components/routes/vocabolieri/PersonLayout'
import {Page404} from '../Page404'
import DashboardIndex, {DASHBOARD_ROUTE} from '../components/routes/contenuti/dashboard/DashboardIndex'
import LoadingScreen from '../components/common/LoadingScreen'
import Frettolangelo from '../components/routes/contenuti/angelochi/Frettolangelo'
import AngelochiIndex, {ANGELOCHI_ROUTE} from '../components/routes/contenuti/angelochi/AngelochiIndex'
import ContenutiIndex, {CONTENUTI_ROUTE} from '../components/routes/contenuti/ContenutiIndex'

export const defaultRouter = createBrowserRouter([
    {
        path: '/',
        element: <RootIndex/>,
    },
    {
        path: PAROLANGELO_ROUTE,
        element: <Parolangelo/>,
    },
    {
        path: `${PAROLANGELO_ROUTE}/:conceptId`,
        element: <ConceptLayout />
    },
    {
        path: VOCABOLIERI_ROUTE,
        element: <Vocabolieri/>,
    },
    {
        path: `${VOCABOLIERI_ROUTE}/:personId`,
        element: <PersonLayout />
    },
    {
        path: CONTENUTI_ROUTE,
        element: <ContenutiIndex/>
    },
    {
        path: `${CONTENUTI_ROUTE}${DASHBOARD_ROUTE}`,
        element: <DashboardIndex />
    },
    {
        path: `${CONTENUTI_ROUTE}${ANGELOCHI_ROUTE}`,
        element: <AngelochiIndex/>
    },
    {
        path: `${CONTENUTI_ROUTE}${ANGELOCHI_ROUTE}/frettolangelo`,
        element: <Frettolangelo/>
    },
    {
        path: '*',
        element: <Page404/>
    }
])

export const loadingRouter = createBrowserRouter([
    {
        path: '*',
        element: <LoadingScreen/>
    }
])
