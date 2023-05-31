import { useSelector } from 'react-redux';
import Forms from './components/Forms';
import Navbar from './components/Navbar';
import { questions } from './Questions';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom'
import PostPage from './PostPage';



function App() {
  
  const pageCount = useSelector((state)=>state.counter.count);

  return (
    < >
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Forms questions={questions} pageCount={pageCount} />} />
          <Route path="/posts" element={<PostPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
