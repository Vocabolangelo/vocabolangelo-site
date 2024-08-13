import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import InnerWrapper from '../../common/story/InnerWrapper'
import ElementProps from '../../props/ElementProps'
import { faCat, faSkull, faVenusMars } from '@fortawesome/free-solid-svg-icons'
import { selectorTheme } from '../../../state/selectorTheme'
import { StoryColor } from '../../../classes/story/StoryColor'

export default function Pillars() {
    return <InnerWrapper 
        optionalModifiers={['align-center']}
        style={1}>
        <h2>I Tre Grandi Pilastri del Vocabolangelo</h2>
        <p>
            Nuove Parolangelo nascono ogni giorno.
            Col tempo ci siamo resi conto che molte di queste seguono uno schema ben preciso.
            La maggior parte delle Parolangelo infatti, è spesso collegata ad almeno uno dei tre grandi pilastri del Vocabolangelo.
        </p>
        <div className="items align-center style1 medium onscroll-fade">
            <Element 
                title="Sesso"
                description="Probabilmente i Vocabolieri sono semplicemente molto arrapati e desiderano una mega orgia."
                icon={faVenusMars}
            />
            <Element
                title="Morte"
                description="Se non ti piace il Vocabolangelo speriamo che Dio possa convocarti al suo fianco."
                icon={faSkull}
            />
            <Element
                title="Gattini"
                description="Esistono altri gatti nell'universo? Sono venerati e adorati ovunque o solo sulla terra?"
                icon={faCat}
            />
        </div>
    </InnerWrapper>
}

function Element(props: ElementProps) {
    const {title, description, icon} = props

    const theme = selectorTheme()
    return <section>
        <div className="inner">
            <span className={'icon style2 major'}>
                <FontAwesomeIcon 
                    icon={icon}
                    color={theme.color === StoryColor.White ? 'black' : 'white' }
                    size="2xl"
                />
            </span>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    </section>
}