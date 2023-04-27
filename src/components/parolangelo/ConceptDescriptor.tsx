import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import ConceptProps from '../props/ConceptProps'
import {faUser, faUsers, faLink, faImage, faVideo} from '@fortawesome/free-solid-svg-icons'

/**
 * Return a group of indicator describing a Concept.
 * @param props the ConceptProps.
 */
export default function ConceptDescriptor(props: ConceptProps) {
    const c = props.concept
    return <>
        <FontAwesomeIcon size="xs" icon={c.personCreatorsCount > 1 ? faUsers : faUser}/>
        {(c.related().length > 0) && <FontAwesomeIcon size="xs" icon={faLink}/>}
        {(c.images.length > 0) && <FontAwesomeIcon size="xs" icon={faImage}/>}
        {(c.videos.length > 0) && <FontAwesomeIcon size="xs" icon={faVideo}/>}
    </>
}