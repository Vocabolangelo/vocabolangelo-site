import {createBrowserRouter} from 'react-router-dom'
import RootIndex from '../components/routes/root/RootIndex'
import ConceptList, {PAROLANGELO_ROUTE, SLANGELO_ROUTE} from '../components/routes/parolangelo/ConceptList'
import {ConceptLayout} from '../components/routes/parolangelo/ConceptLayout'
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
import {Parolangelo} from '../rdf/types/Parolangelo'
import {Slangelo} from '../rdf/types/Slangelo'

export const defaultRouter = createBrowserRouter([
    {
        path: '/',
        element: <RootIndex/>,
    },
    {
        path: PAROLANGELO_ROUTE,
        element: <ConceptList
            title={'Parolangelo'}
            subtitle={
                `Ognuna di queste parole è stata inventata da almeno un vocaboliere.\n
                Chiunque può creare nuove parolangelo, proporre nuove definizioni ed esempi,
                o fornire materiale mediatico in grado di arricchire questo archivio.`
            }
            effect={ (setConcept, helper) =>
                Parolangelo.all().then(nodes => {
                    setConcept(nodes.sort((a, b) => helper.compareFn(a,b)))
                })
            }
        />,
    },
    {
        path: `${PAROLANGELO_ROUTE}/:id`,
        element: <ConceptLayout />
    },
    {
        path: SLANGELO_ROUTE,
        element: <ConceptList
            title={'Slangelo'}
            subtitle={
                `Ognuno si questi slangelo è stato inventata da almeno un vocaboliere.\n
                Chiunque può creare nuovi slangelo, proporre nuove definizioni ed esempi,
                o fornire materiale mediatico in grado di arricchire questo archivio.`
            }
            effect={ (setConcept, helper) =>
                Slangelo.all().then(nodes => {
                    setConcept(nodes.sort((a, b) => helper.compareFn(a,b)))
                })}
        />,
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
