
import { BrowserRouter, Route, Routes }  from 'react-router-dom';
import LoginSignup from './pages/LoginSignup.js'
import HomePage from './pages/HomePage.js'
import ProfilePage from './pages/ProfilePage.js'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = '/' element = { <LoginSignup /> } />
        <Route path = '/homepage' element = { <HomePage /> } />
        <Route path = '/profilepage' element = { <ProfilePage /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App



