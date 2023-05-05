import Banner from '../../common/story/Banner'

export default function ContenutiBanner() {
    return <Banner
        style={1}
        optionalModifiers={['orient-left', 'content-align-left', 'image-position-right', 'fullscreen', 'onload-image-fade-in', 'onload-content-fade-right']}
        imageUrl={'/images/forest.jpg'}
        imageAlt={'Foresta misteriosa'}>
        <h1>Contenuti aggiuntivi</h1>
        <p className={'major'}>
            Il Vocabolangelo è molto più di una raccolta di parolangelo.<br/>
        </p>
    </Banner>
}
