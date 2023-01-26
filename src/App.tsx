import './App.css';
import Appbar from './components/layout/Appbar';
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from './hooks/redux-hooks';
import { authActions, fetchUserByToken } from './store/auth-slice';
import { useEffect, useState } from 'react'
import Card from './components/shared/Card';
import { CircularProgress } from '@mui/material';

function App() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const isLoggedIn = (useAppSelector(state => state.auth.isLoggedIn))
  let userToken: string = '';

  if(isLoggedIn) {
    userToken = localStorage.getItem('token')!.toString();
  }

  useEffect(() => {
    if(isLoggedIn) {
      setIsLoading(true)
      dispatch(fetchUserByToken(userToken))
      .then((data ) => {
          if(data.meta.requestStatus==="rejected") {
            dispatch(authActions.logout())
            navigate("/login");
          } 
      })
      setIsLoading(false)
    }
  }, [isLoggedIn, userToken])
  
  // TO DO

  return (
    <div className="App">
      <Appbar/>
        {isLoggedIn && !isLoading &&  (<Outlet/>)}
        {isLoggedIn && isLoading && (
          <Card>
            <CircularProgress/>
          </Card>
        )}
        {!isLoggedIn && !isLoading && ( <Navigate to={"/login"}/> )}
    </div>
  );
}

export default App;
