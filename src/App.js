import { BrowserRouter } from "react-router-dom";

import Navbar from "./UI/navbar/Navbar";
import AppRouter from "./components/AppRouter";
import { AuthContext } from "./context";
import { useEffect, useState } from "react";
function App() {
  useEffect(()=>{
    if(localStorage.getItem('auth')){
      setIsAuth(true)
    }
    
  },[])
  const [isAuth, setIsAuth] = useState(false);
  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
      }}
    >
      <BrowserRouter>
        <Navbar></Navbar>
        <AppRouter></AppRouter>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}
export default App;
