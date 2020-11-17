import React from 'react'
import './App.css'
import Header from "./components/Header/Heder"
import NavBar from "./components/NavBar/NavBar"
import Profile from "./components/Profile/Profile"
import {BrowserRouter, Route} from "react-router-dom"
import Dialogs from "./components/Dialogs/Dialogs"

const App = (props) => {
  return (
       <BrowserRouter>
           <div className='app-wrapper'>
               <Header />
               <NavBar />
               <div className = 'app-wrapper-content'>
                   <Route path='/dialogs' render={ () => <Dialogs store={props.store} />}/>
                   <Route path='/profile' render={ () => <Profile
                       state={props.state.profilePage}
                       dispatch={props.dispatch}
                   />}/>
               </div>
           </div>
       </BrowserRouter>
  )
}

export default App