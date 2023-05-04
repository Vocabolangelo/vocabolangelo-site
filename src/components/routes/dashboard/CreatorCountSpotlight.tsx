import {useEffect, useState} from 'react'
import {Person} from '../../../rdf/types/Person'
import {Link} from 'react-router-dom'
import {PAROLANGELO_ROUTE} from '../parolangelo/Parolangelo'
import Spotlight from '../../common/story/Spotlight'

/**
 * Spotlight that present the number of Vocabolieri in the Vocabolangelo Project.
 */
export default function CreatorCountSpotlight() {
    const [maleCount, setMaleCount] = useState(0)
    const [femaleCount, setFemaleCount] = useState(0)
    const [otherCount, setOtherCount] = useState(0)

    useEffect(() => {
        Person.all().then(creators => {
            setMaleCount(creators.filter(c => c.gender === 'male').length)
            setFemaleCount(creators.filter(c => c.gender === 'female').length)
            setOtherCount(creators.filter(c => c.gender !== 'female' && c.gender !== 'male').length)
        })
    }, [])

    return <Spotlight
        style={1}
        optionalModifiers={['orient-left', 'content-align-left', 'image-position-right', 'onscroll-image-fade-in']}
        imageUrl={'/images/people.jpg'}
        imageAlt={'Collaborazione'}
    >
        <h1> {maleCount + femaleCount + otherCount} </h1>
        <p className={'major'}>
            Sono i <Link to={`${PAROLANGELO_ROUTE}/vocaboliere`}>vocabolieri</Link> del
            <strong> Vocabolangelo</strong>. <br/>
            I maschi sono <strong>{maleCount}</strong>, le femmine sono <strong>{femaleCount}</strong>,
            i restanti (<strong>{otherCount}</strong>) non si identificano nel binarismo di genere.
        </p>
        <p>
            Grazie all&apos; <Link to={`${PAROLANGELO_ROUTE}/apostolangelo`}>
                apostolangelo
            </Link> un giorno questo numero sarà molto più alto.
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
