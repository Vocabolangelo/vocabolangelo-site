import Spotlight from '../../../common/story/Spotlight'
import CountAndSoloCountProps from '../../../props/CountAndSoloCountProps'

export default function ConcettangeloCountSpotlight(props: CountAndSoloCountProps) {

    const {count, soloCount} = props

    return <Spotlight
        style={1}
        optionalModifiers={['orient-right', 'content-align-left', 'image-position-center', 'onscroll-image-fade-in']}
        imageUrl={'/images/globe.jpg'}
        imageAlt={'Mappamondo'}
    >
        <h1> {count} </h1>
        <p>
            Sono i concettangelo totali all&apos;interno del <strong> Vocabolangelo</strong>.<br/>
            Di questi, <strong> {count - soloCount} </strong> sono nati dalla collaborazione, mentre
            <strong> {soloCount}</strong> sono stati inventate dai singoli.<br/>
            Qua sotto troverai ulteriori dettagli.
        </p>
    </Spotlight>
}
