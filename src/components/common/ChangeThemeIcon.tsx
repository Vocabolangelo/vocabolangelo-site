import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {useDispatch, useSelector} from 'react-redux'
import {State} from '../../state/State'
import {faMoon, faSun, IconDefinition} from '@fortawesome/free-solid-svg-icons'
import {VocabolangeloTheme} from '../../classes/VocabolangeloTheme'
import {setTheme} from '../../state/Store'

export default function ChangeThemeIcon() {

    const vocabolangeloTheme: VocabolangeloTheme = useSelector((state: State) => state.theme)

    const dispatch = useDispatch()

    function getIcon(): IconDefinition {
        switch(vocabolangeloTheme) {
        case(VocabolangeloTheme.BLACK):
            return faMoon
        case(VocabolangeloTheme.WHITE):
            return faSun
        }
    }
 
    return <FontAwesomeIcon
        onClick={() => setNewTheme()}
        style={{paddingRight: '1em', cursor: 'pointer' }}
        icon={getIcon()}
        color={'white'}
    />

    function setNewTheme() {
        let newTheme: VocabolangeloTheme = VocabolangeloTheme.WHITE
        if(vocabolangeloTheme == VocabolangeloTheme.WHITE) {
            newTheme = VocabolangeloTheme.BLACK
        }
        localStorage.setItem('vocabolangeloTheme', newTheme.toString())
        dispatch(setTheme(newTheme))
    }
}
