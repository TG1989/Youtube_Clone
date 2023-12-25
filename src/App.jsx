import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Feed from './pages/Feed'
import SearchResults from './pages/SearchResults'
import VideoDetails from './pages/VideoDetails'
import Header from './components/Header'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Feed />} />
        <Route path='/watch' element={<VideoDetails />} />
        <Route path='/results' element={<SearchResults />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
