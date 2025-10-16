import UserContextProvider from './context/UserContextProvider'
import './App.css'
import Profile from './components/Profile'
import Login from './components/Login'

function App() {
  return (
   <UserContextProvider>
        <h1>My name is umar</h1>
        <Profile/>
        <Login/>
   </UserContextProvider>
  )
}

export default App
