
import './App.css';
import Navbar from './components/Navbar';
import Login from './components/signIn/Login';
import Signup from './components/signup/Signup';
// import Registration from './components/signup/Registration';

import Routing from './route/Routing';





function App() {
  return (
    <>
    <Navbar/>
    {/* <Registration/> */}
     <Routing/>
    {/* <Signup/> */}
    {/* <Login/> */}
    </>
  );
}

export default App;
