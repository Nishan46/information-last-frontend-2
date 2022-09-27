import './App.css';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import Home from './Pages/Home';
import Account from './Pages/Account';
import Registration from './Pages/Registration';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login/login-id::email_id' element={<Home/>}/>
          <Route path='/account' element={<Account/>}/>
          <Route path='/registration' element={<Registration/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
