import './App.css'
import Header from './Components/Header/Header'
import Navigation from './Components/Navbar/Navigation'
import Profile from "./Components/Content/Profile/Profile"
import Messages from "./Components/Content/Messages/Messages";

function App() {
  return (
    <div className="app-wrapper">          
      <Header />
      <Navigation />
        <div className="app-wrapper-content">
            {/*<Profile />*/}
            <Messages />
        </div>
    </div>
  );
}

export default App;
