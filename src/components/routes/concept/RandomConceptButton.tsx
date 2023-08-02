import {useNavigate} from 'react-router-dom'
import ConceptProps from '../../props/ConceptProps'
import {vocang} from '../../../rdf/prefixes'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShuffle} from '@fortawesome/free-solid-svg-icons'
import React from 'react'

export default function RandomConceptButton(props: ConceptProps) {
    const navigate = useNavigate()

    return <div
        onClick={() => navigate(`./${props.concept?.relativeUri(vocang)}`)}
        style={{marginLeft: '1%'}} className="button"
    >
        <FontAwesomeIcon size={'lg'} icon={faShuffle}/>  A caso!
    </div>
}
