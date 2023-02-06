import './App.css'
import Header from './Components/Header/Header'
import Navigation from './Components/Navbar/Navigation'
import Profile from "./Components/Content/Profile/Profile"
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Messages from "./Components/Content/Messages/Messages";

function App() {
  return (
      <BrowserRouter>
          <div className="app-wrapper">
              <Header/>
              <Navigation/>
              <div className="app-wrapper-content">
                  <Routes>
                      <Route path='/profile' element={<Profile />}/>
                      <Route path='/messages' element={<Messages />}/>
                  </Routes>
              </div>
          </div>
      </BrowserRouter>
  );
}

export default App;
