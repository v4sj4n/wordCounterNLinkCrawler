
import './App.css'
import LinkCrawler from './components/linkCrawler/LinkCrawler'
import WordCounter from './components/wordCounter/WordCounter'

function App() {

  return (
    <div className='main-container'>
      <WordCounter />
      <LinkCrawler />
    
    </div>
    
  )
}

export default App
