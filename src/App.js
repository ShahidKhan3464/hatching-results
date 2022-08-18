import { Routes, Route } from 'react-router-dom';
import Homepage from './components/pages/homepage/index';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Routes>
        {/* **********HOMEPAGE******** */}
        <Route exact path='/' element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;