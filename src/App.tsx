import './App.css';
import Appbar from './components/layout/Appbar';
import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from './hooks/redux-hooks';

function App() {
  
  const isLoggedIn = (useAppSelector(state => state.auth.isLoggedIn))
  
  // TO DO

  return (
    <div className="App">
      <Appbar/>
        {isLoggedIn ? <Outlet/> : <Navigate to={"/login"}/>}
    </div>
  );
}

export default App;
