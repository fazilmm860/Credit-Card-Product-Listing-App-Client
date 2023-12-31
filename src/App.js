
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './pages/Navbar'
import HomePage from './pages/HomePage';
import Categories from './pages/Categories';
import AddCards from './pages/AddCards';
import List from './pages/List';
import Error from './pages/Error';
function App() {
  return (
    <>
     <BrowserRouter>
    <Navbar/>
   
    <Routes>
      <Route
      path='/'
      element={
        <HomePage/>
      }
      />
       <Route
      path='/category'
      element={
        <Categories/>
      }
      />
 <Route
      path='/addCards'
      element={
        <AddCards/>
      }
      />
       <Route
       path='/list/:category'
      element={
        <List/>
      }
      />
        <Route
       path='*'
      element={
        <Error/>
      }
      />
      
    </Routes>
    </BrowserRouter>

    </>
    
  );
}

export default App;
