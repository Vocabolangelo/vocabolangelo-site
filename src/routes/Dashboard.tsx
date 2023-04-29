import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import WordCountSpotlight from '../components/dashboard/WordCountSpotlight'
import CreatorCountSpotlight from '../components/dashboard/CreatorCountSpotlight'
import LeaderBoard from '../components/dashboard/LeaderBoard'

export const DASHBOARD_ROUTE = '/dashboard'
export default function Dashboard() {
    return <div id="wrapper" className="divided">
        <Header/>
        <WordCountSpotlight/>
        <CreatorCountSpotlight/>
        <LeaderBoard/>
        <Footer/>
    </div>
}
