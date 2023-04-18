import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AuthContextProvider } from "./context/AuthContext"
import LoginForm from "./Components/Login/LoginForm"

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/" element={<LoginForm/>}/>
            {/* <Route path="" element={}/>
            <Route path="" element={}/> */}
          </Routes>
        </main>
      </BrowserRouter>
    </AuthContextProvider>
  )
}

export default App
