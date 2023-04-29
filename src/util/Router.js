import {createBrowserRouter} from 'react-router-dom'
import Root from '../routes/Root'
import Parolangelo, {PAROLANGELO_ROUTE} from '../routes/Parolangelo'
import {ConceptLayout} from '../routes/ConceptLayout'
import React from 'react'
import Vocabolieri, {VOCABOLIERI_ROUTE} from '../routes/Vocabolieri'
import {PersonLayout} from '../routes/PersonLayout'
import {Page404} from '../Page404'
import Dashboard, {DASHBOARD_ROUTE} from '../routes/Dashboard'
import LoadingScreen from '../components/common/LoadingScreen'
import Frettolangelo from '../components/games/Frettolangelo'
import Games, {GAMES_ROUTE} from '../routes/Games'

export const defaultRouter = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
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
        path: DASHBOARD_ROUTE,
        element: <Dashboard />
    },
    {
        path: GAMES_ROUTE,
        element: <Games/>
    },
    {
        path: `${GAMES_ROUTE}/frettolangelo`,
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
