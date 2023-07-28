import React, {useEffect, useState} from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from 'react-router-dom'
import {defaultRouter, loadingRouter} from './util/Router'
import {RDFStore} from './rdf/RDFStore'
import { Provider } from 'react-redux'
import {store} from './state/Store'

ReactDOM.createRoot(document.getElementById('root')).render(<App/>)

function App() {
    const [router, setRouter]  = useState(loadingRouter)

    useEffect(() => {
        const interval = setInterval(() => {
            if(RDFStore.store.statements.length !== 0) {
                setRouter(defaultRouter)
            }
        }, 100)
        return () => {
            clearInterval(interval)
        }
    }, [])

    return <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
    </React.StrictMode>
}
