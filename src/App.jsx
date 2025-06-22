
import './App.css'
import { NewsList } from './components/newsList'
import NewsData from './data/newsData'

function App() {

  return (
    <div className='app'>
    <h1>NOTICIAS</h1>
    <NewsList news = {NewsData}/>
    </div>
  )
}

export default App
