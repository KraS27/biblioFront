import './App.css'
import Header from './components/Header/Header'
import Navigation from './components/Navbar/Navigation'
import Profile from "./components/Content/Profile/Profile"
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Dialogs from "./components/Content/Dialogs/Dialogs";

function App(props) {
  return (
      <BrowserRouter>
          <div className="app-wrapper">
              <Header/>
              <Navigation/>
              <div className="app-wrapper-content">
                  <Routes>
                      <Route path='/profile'
                             element={
                                <Profile
                                     profile={props.state.profile}
                                     dispatch={props.dispatch}
                                />
                      }/>
                      <Route path='/dialogs/*'
                             element={
                                <Dialogs
                                      chats={props.state.dialogs.chats}
                                      messages={props.state.dialogs.messages}
                                      newDialogMessage={props.state.dialogs.newDialogMessage}
                                      dispatch={props.dispatch}
                                />
                      }/>
                  </Routes>
              </div>
          </div>
      </BrowserRouter>
  );
}

export default App;
