
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Thanks from './components/Thanks'
import Main from './components/Main';

function App() {
  return (
    <Router>
  <div className='sm:bg-slate-800'>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
    </style>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
    </style>
    <Routes>
    <Route path="/" exact element={<Main />} />
          <Route path="/thanks" exact element={<Thanks />} />
    </Routes>
       
</div>
 </Router>
  );
}

export default App;
