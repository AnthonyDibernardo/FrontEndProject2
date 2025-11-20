import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import { UserProvider } from './components/Provider.jsx'

function App() {

  return (
    <UserProvider>
      <div className='page'>
        <Header />
        <Footer />
      </div>
    </UserProvider>
  )
}

export default App
