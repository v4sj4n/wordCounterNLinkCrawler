
import './App.scss'
import LinkCrawler from './components/linkCrawler/LinkCrawler'
import WordCounter from './components/wordCounter/WordCounter'

function App() {

  return (
    <>
    <h1 className='main-title'>Word Counter & Link Crawler</h1>
    <div className='main-container'>
      <WordCounter />
      <LinkCrawler />
    
    </div>
    </>
    
  )
}

export default App
