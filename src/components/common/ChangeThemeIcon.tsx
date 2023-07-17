import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSelector } from 'react-redux'
import { State } from '../../state/State'
import { IconDefinition, faCircle, faCircleNotch} from '@fortawesome/free-solid-svg-icons'
import {VocabolangeloTheme, vocabolangeloThemes} from '../../classes/VocabolangeloTheme'

export default function ChangeThemeIcon() {
    
    const vocabolangeloTheme: VocabolangeloTheme = useSelector((state: State) => state.theme)

    const theme = vocabolangeloThemes().get(vocabolangeloTheme)

    const iconColor = theme?.invert ? 'white' : 'black'

    function getIcon(): IconDefinition {
        switch(vocabolangeloTheme) {
        case(VocabolangeloTheme.BLACK):
            return faCircle
        case(VocabolangeloTheme.WHITE):
            return faCircleNotch
        }
    }
 
    return <FontAwesomeIcon icon={getIcon()} color={iconColor} size="2xl"/>

}
