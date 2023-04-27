import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import WordCounter from '../components/dashboard/WordCounter'
import CreatorCounter from '../components/dashboard/CreatorCounter'
import LeaderBoard from '../components/dashboard/LeaderBoard'

export const DASHBOARD_ROUTE = '/dashboard'
export default function Dashboard() {
    return <div id="wrapper" className="divided">
        <Header/>
        <WordCounter/>
        <CreatorCounter/>
        <LeaderBoard/>
        <Footer/>
    </div>
}