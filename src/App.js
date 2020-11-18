import React from 'react'
import './App.css'
import Header from "./components/Header/Heder"
import NavBar from "./components/NavBar/NavBar"
import Profile from "./components/Profile/Profile"
import {Route} from "react-router-dom"
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {
  return (
           <div className='app-wrapper'>
               <Header />
               <NavBar />
               <div className = 'app-wrapper-content'>
                   <Route path='/dialogs' render={ () => <DialogsContainer/>}/>
                   <Route path='/profile' render={ () => <Profile />}/>
               </div>
           </div>
  )
}

export default App