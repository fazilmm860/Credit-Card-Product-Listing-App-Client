
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './pages/Navbar'
import HomePage from './pages/HomePage';
import Categories from './pages/Categories';
import AddCards from './pages/AddCards';
function App() {
  return (
    <>
     <BrowserRouter>
    <Navbar/>
   
    <Routes>
      <Route
      path='/dash'
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
      
    </Routes>
    
    </BrowserRouter>

    </>
    
  );
}

export default App;
