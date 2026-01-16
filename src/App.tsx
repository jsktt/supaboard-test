
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import './App.css'
import PostListPage from './pages/PostListPage'
import PostDetailPage from './pages/PostDetailPage'
import PostCreatePage from './pages/PostCreatePage'

function App() {


  return (
    <BrowserRouter>
      <nav>
        <Link to="/">목록</Link>
        <Link to="/create">글 쓰기</Link>
      </nav>
      <Routes>
        <Route path='/' element={<PostListPage />} />
        <Route path='/posts/:id' element={<PostDetailPage />} />
        <Route path='/create' element={<PostCreatePage />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
