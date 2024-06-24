import {createBrowserRouter} from 'react-router-dom'
import RootIndex from '../components/routes/root/RootIndex'
import {ConceptLayout} from '../components/routes/concept/ConceptLayout'
import React from 'react'
import Vocabolieri, {VOCABOLIERI_ROUTE} from '../components/routes/vocabolieri/Vocabolieri'
import {VocaboliereLayout} from '../components/routes/vocabolieri/VocaboliereLayout'
import {Page404} from '../Page404'
import DashboardIndex, {DASHBOARD_ROUTE} from '../components/routes/contenuti/dashboard/DashboardIndex'
import LoadingScreen from '../components/common/LoadingScreen'
import Frettolangelo from '../components/routes/contenuti/angelochi/Frettolangelo'
import AngelochiIndex, {ANGELOCHI_ROUTE} from '../components/routes/contenuti/angelochi/AngelochiIndex'
import ContenutiIndex, {CONTENUTI_ROUTE} from '../components/routes/contenuti/ContenutiIndex'
import VocaboregolangeloIndex, {
    VOCABOREGOLANGELO_ROUTE
} from '../components/routes/contenuti/vocaboregolangelo/VocaboregolangeloIndex'
import {SlangeloList, SLANGELO_ROUTE} from '../components/routes/slangelo/SlangeloList'
import {ParolangeloList} from '../components/routes/parolangelo/ParolangeloList'
import {PAROLANGELO_ROUTE} from '../components/routes/concept/ConceptList'
import { AddConcept, ADD_ROUTE } from '../components/routes/addConcept/AddConcept'

export const defaultRouter = createBrowserRouter([
    {
        path: '/',
        element: <RootIndex/>,
    },
    {
        path: PAROLANGELO_ROUTE,
        element: <ParolangeloList/>,
    },
    {
        path: `${PAROLANGELO_ROUTE}/:id`,
        element: <ConceptLayout />
    },
    {
        path: SLANGELO_ROUTE,
        element: <SlangeloList/>,
    },
    {
        path: `${SLANGELO_ROUTE}/:id`,
        element: <ConceptLayout />
    },
    {
        path: VOCABOLIERI_ROUTE,
        element: <Vocabolieri/>,
    },
    {
        path: `${VOCABOLIERI_ROUTE}/:id`,
        element: <VocaboliereLayout />
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
        path: `${CONTENUTI_ROUTE}${VOCABOREGOLANGELO_ROUTE}`,
        element: <VocaboregolangeloIndex/>
    },
    {
        path: `${ADD_ROUTE}`,
        element: <AddConcept/>
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
