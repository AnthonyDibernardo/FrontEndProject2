import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import { UserProvider } from './components/Provider.jsx'

function App() {

  return (
    <UserProvider>
        <Header />
        <Footer />
    </UserProvider>
  )
}

export default App
