import './App.css';
import Appbar from './components/layout/Appbar';
import { Outlet } from "react-router-dom";


function App() {


  return (
    <div className="App">
      <Appbar/>
      <Outlet />
    </div>
  );
}

export default App;
