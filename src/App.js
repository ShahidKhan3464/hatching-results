import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage/index';
import Courses from './pages/courses/index';
import Payment from './pages/payment/index';
import PaymentHistory from './pages/paymentHistory/index';
import CheckOut from './pages/checkout/index';
import CEU from './pages/ceu/index';
import UniversityCredits from './pages/universityCredits/index';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route exact path='/courses' element={<Courses />} />
        <Route exact path='/payment' element={<Payment />} />
        <Route exact path='/paymentHistory' element={<PaymentHistory />} />
        <Route exact path='/checkOut' element={<CheckOut />} />
        <Route exact path='/continue-education-unit' element={<CEU />} />
        <Route exact path='/university-credits' element={<UniversityCredits />} />
      </Routes>
    </div>
  );
}

export default App;