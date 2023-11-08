import {Concept} from '../rdf/types/Concept'
import {setTheme} from '../state/Store'
import {VocabolangeloTheme} from '../classes/VocabolangeloTheme'
import {vocang} from '../rdf/prefixes'
import {AnyAction} from 'redux'
import {Dispatch} from 'react'

export function easterEggHandler(concept: Concept, dispatch: Dispatch<AnyAction>): void {
    if(concept.relativeUri(vocang) === 'violare') {
        dispatch(setTheme(VocabolangeloTheme.VIOLET))
    }
}
