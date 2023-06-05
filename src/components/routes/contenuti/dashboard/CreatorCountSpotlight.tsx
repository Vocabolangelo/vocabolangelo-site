import {useEffect, useState} from 'react'
import {Vocaboliere} from '../../../../rdf/types/Vocaboliere'
import {Link} from 'react-router-dom'
import {PAROLANGELO_ROUTE} from '../../concept/ConceptList'
import Spotlight from '../../../common/story/Spotlight'
import {Organization, Organizations} from '../../../../rdf/types/Organization'

/**
 * Spotlight that present the number of Vocabolieri in the Vocabolangelo Project.
 */
export default function CreatorCountSpotlight() {
    const [vocaboladminCount, setVocaboladminCount] = useState(0)
    const [maleCount, setMaleCount] = useState(0)
    const [femaleCount, setFemaleCount] = useState(0)
    const [otherGendersCount, setOtherGendersCount] = useState(0)

    useEffect(() => {
        Vocaboliere.all().then(creators => {
            setVocaboladminCount(creators.filter(
                c => c.memberOf()().find(
                    o => new Organization(o.node).toEnum() === Organizations.VOCABOLADMIN)
            ).length)
            setMaleCount(creators.filter(c => c.gender === 'male').length)
            setFemaleCount(creators.filter(c => c.gender === 'female').length)
            setOtherGendersCount(creators.filter(c => c.gender !== 'female' && c.gender !== 'male').length)
        })
    }, [])

    return <Spotlight
        style={1}
        optionalModifiers={['orient-left', 'content-align-left', 'image-position-right', 'onscroll-image-fade-in']}
        imageUrl={'/images/planning.jpg'}
        imageAlt={'Collaborazione'}
    >
        <h1> {maleCount + femaleCount + otherGendersCount} </h1>
        <p className={'major'}>
            Il Vocabolangelo conta <strong>{maleCount + femaleCount + otherGendersCount} </strong>
            <Link to={`${PAROLANGELO_ROUTE}/vocaboliere`}>Vocabolieri</Link>, <strong>{vocaboladminCount} </strong>
            di questi sono <Link to={`${PAROLANGELO_ROUTE}/vocaboladmin`}>Vocaboladmin</Link>.<br/>
            I maschi sono <strong>{maleCount}</strong>, le femmine sono <strong>{femaleCount}</strong>,
            i restanti (<strong>{otherGendersCount}</strong>) non si identificano nel binarismo di genere.
        </p>
        <p>
            Grazie all&apos; <Link to={`${PAROLANGELO_ROUTE}/apostolangelo`}>
                apostolangelo
            </Link> un giorno questi numeri saranno molto più alti.
        </p>
        <ul className="actions stacked">
            <li>
                <a href={PAROLANGELO_ROUTE} className="button">
                    Vocabolieri
                </a>
            </li>
        </ul>
    </Spotlight>
}
