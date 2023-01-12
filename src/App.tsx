import './App.css';
import Appbar from './components/layout/Appbar';
import { Outlet, useNavigate } from "react-router-dom";
import { useAppSelector } from './hooks/redux-hooks';
import { useEffect } from 'react';

function App() {
  const navigate = useNavigate();
  const isLoggedIn = (useAppSelector(state => state.auth.isLoggedIn))
  
  // useEffect(() => {
  //   if(!isLoggedIn) {
  //     navigate("login")
  //   }
  // }, [isLoggedIn])

  // TO DO

  return (
    <div className="App">
      <Appbar/>
      {isLoggedIn && (<Outlet/>)}
    </div>
  );
}

export default App;
