import logo from './logo.svg';
import './App.css';
import AddPost from './component/AddPost';
import SearchPost from './component/SearchPost';
import DeletePost from './component/DeletePost';
import NavBar from './component/NavBar';
import ViewPost from './component/ViewPost';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddPost/>}/>
      <Route path='/search' element={<SearchPost/>}/>
      <Route path='/delete' element={<DeletePost/>}/>
      <Route path='/view' element={<ViewPost/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
