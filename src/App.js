import './App.css'
import Header from './components/Header/Header'
import Navigation from './components/Navbar/Navigation'
import Profile from "./components/Content/Profile/Profile"
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import DialogsContainer from "./components/Content/Dialogs/DialogsContainer";
import UsersContainer from "./components/Content/Users/UsersContainer";
import ProfileInfoContainer from "./components/Content/Profile/ProfileInfo/ProfileInfoContainer";

function App() {
  return (
      <BrowserRouter>
          <div className="app-wrapper">
              <Header/>
              <Navigation/>
              <div className="app-wrapper-content">
                  <Routes>
                      <Route path='/profile/:userId'
                             element={<Profile />}
                      />
                      <Route path='/dialogs/*'
                             element={<DialogsContainer />}
                      />
                      <Route path='/users'
                             element={<UsersContainer />}
                      />
                      <Route path='/profile'
                             element={<Profile />}
                      />
                  </Routes>
              </div>
          </div>
      </BrowserRouter>
  );
}

export default App;
