import './App.css'
import Header from './Components/Header/Header'
import Navigation from './Components/Navbar/Navigation'
import Profile from "./Components/Content/Profile/Profile"
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Dialogs from "./Components/Content/Dialogs/Dialogs";

function App(props) {
  return (
      <BrowserRouter>
          <div className="app-wrapper">
              <Header/>
              <Navigation/>
              <div className="app-wrapper-content">
                  <Routes>
                      <Route path='/profile' element={<Profile />}/>
                      <Route path='/dialogs/*' element={<Dialogs chats={props.dialogs[0]} messages={props.dialogs[1]}/>}/>
                  </Routes>
              </div>
          </div>
      </BrowserRouter>
  );
}

export default App;
