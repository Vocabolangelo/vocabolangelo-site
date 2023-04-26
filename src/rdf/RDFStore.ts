import {Store} from 'rdflib'
import $ from 'jquery'
import {vocang} from './prefixes'
const $RDF = require('rdflib')

const _rdfStore: Store = $RDF.graph()
const timeout_time = 5000
const check_time = 100

const INFERRED_TTL_LOCATION = '/schema/vocabolangelo-merged.ttl'
const TTL_LOCATION = '/schema/vocabolangelo.ttl'
export class RDFStore {

    /**
     * Initialize the RDFStore object by retrieving the TTL file with a GET request.
     * First try with the inferred file obtained by the CI. If it fails use the normal file.
     */
    public static initialize(): void {
        RDFStore.retrieveTTL(INFERRED_TTL_LOCATION, () => {
            RDFStore.retrieveTTL(TTL_LOCATION, () =>
                Error('No RDF data could be used.')
            )
        })
    }

    private static retrieveTTL(rdf : string, failCallback: () => void): void {
        $.get(rdf)
            .done(function (data) {
                try{
                    $RDF.parse(data, _rdfStore, vocang.uri)
                }catch (e) {
                    console.log(`WARNING: Inferred TTL file could not be used at location: ${rdf}`)
                    console.error(e)
                } finally {
                    failCallback()
                }
            })
            .fail( () => failCallback())
            .catch(() => failCallback())
    }

    public static get store(): Store {
        return _rdfStore
    }

    static async checkStore(): Promise<boolean> {
        const start_time: number = new Date().getTime()
        if (_rdfStore.statements.length !== 0) {
            return true
        } else if (new Date().getTime() > start_time + timeout_time) {
            return false
        } else {
            await new Promise(resolve => setTimeout(resolve, check_time))
            return RDFStore.checkStore()
        }
    }

    static async safeCall<T>(fun: (rdfStore: Store) => T): Promise<T> {
        const result = await RDFStore.checkStore()
        if(result) {
            return fun(_rdfStore)
        } else {
            throw new Error('Could not load RDF data. Timeout Reached.')
        }
    }

}

RDFStore.initialize()
