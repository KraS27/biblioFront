import './App.css'
import Header from './components/Header/Header'
import Navigation from './components/Navbar/Navigation'
import Profile from "./components/Content/Profile/Profile"
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import DialogsContainer from "./components/Content/Dialogs/DialogsContainer";

function App(props) {
  return (
      <BrowserRouter>
          <div className="app-wrapper">
              <Header/>
              <Navigation/>
              <div className="app-wrapper-content">
                  <Routes>
                      <Route path='/profile'
                             element={<Profile store={props.store}/>}
                      />
                      <Route path='/dialogs/*'
                             element={<DialogsContainer store={props.store}/>}
                      />
                  </Routes>
              </div>
          </div>
      </BrowserRouter>
  );
}

export default App;
