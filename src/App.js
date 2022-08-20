import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage/index';
import Courses from './pages/courses/index';
import Payment from './pages/payment/index';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Routes>
        {/* **********HOMEPAGE******** */}
        <Route exact path='/' element={<Homepage />} />
        <Route exact path='/courses' element={<Courses />} />
        <Route exact path='/payment' element={<Payment />} />
      </Routes>
    </div>
  );
}

export default App;