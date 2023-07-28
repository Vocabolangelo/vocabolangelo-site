import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSelector } from 'react-redux'
import { Theme } from '../../classes/Theme'
import { State } from '../../state/State'
import { IconDefinition, faCircle, faCircleHalfStroke, faCircleNotch} from '@fortawesome/free-solid-svg-icons'
import { VocabolangeloTheme } from '../../classes/VocabolangeloTheme'

export default function ChangeThemeIcon() {
    
    const theme: Theme = useSelector((state: State) => state.theme)
    const iconColor = theme.invert ? 'white' : 'black'

    function getVocabolangeloTheme(theme: Theme): VocabolangeloTheme{
        const icon = [...(Theme.themes())].find(([_, val]) => val == theme)?.[0]
        if(icon === undefined) {
            throw new Error('Can\'t render an icon using this Theme.')
        }
        return icon
    }

    function getIcon(vocabolangeloTheme: VocabolangeloTheme): IconDefinition {
        switch(vocabolangeloTheme) {
        case(VocabolangeloTheme.BLACK):
            return faCircle
        case(VocabolangeloTheme.WHITE):
            return faCircleNotch
        case(VocabolangeloTheme.DARK):
            return faCircleHalfStroke
        }
    }
 
    return <FontAwesomeIcon icon={getIcon(getVocabolangeloTheme(theme))} color={iconColor} size="2xl"/>

}
