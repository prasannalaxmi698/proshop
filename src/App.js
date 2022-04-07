import { Routes ,Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Header from './Components/Header';
import Login from './Components/Login';
import Footer from './Components/Footer';

function App() {
  return (
    
    <div className="App">
    <ToastContainer />
    <Header />
    <Routes>
    <Route exact path="/">
    </Route>
    <Route path="/login" element={<Login/>}>
    </Route>
    </Routes>
    <Footer></Footer>
    </div>
  );
};

export default App;