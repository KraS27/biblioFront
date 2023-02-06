import './App.css'
import Header from './Components/Header/Header'
import Navigation from './Components/Navbar/Navigation'
import Profile from './Components/Profile/Profile'

function App() {
  return (
    <div className="app-wrapper">          
      <Header/>
      <Navigation/>
      <Profile/>
    </div>
  );
}

export default App;
