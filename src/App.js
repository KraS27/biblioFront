import './App.css'
import Header from './components/Header/Header'
import Navigation from './components/Navbar/Navigation'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import DialogsContainer from "./components/Content/Dialogs/DialogsContainer";
import UsersContainer from "./components/Content/Users/UsersContainer";
import ProfileContainer from "./components/Content/Profile/ProfileContainer";
import Login from "./components/Content/Authorization/Login/Login";
import Register from "./components/Content/Authorization/Register/Register";

function App() {
  return (
      <BrowserRouter>
          <div className="app-wrapper">
              <Header/>
              <Navigation/>
              <div className="app-wrapper-content">
                  <Routes>
                      <Route path='/profile/:userId?'
                             element={<ProfileContainer />}
                      />
                      <Route path='/dialogs/*'
                             element={<DialogsContainer />}
                      />
                      <Route path='/users'
                             element={<UsersContainer />}
                      />
                      <Route path='/login'
                             element={<Login />}
                      />
                      <Route path='/register'
                             element={<Register />}
                      />
                  </Routes>
              </div>
          </div>
      </BrowserRouter>
  );
}

export default App;
