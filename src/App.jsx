import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import { UserProvider } from './components/Provider.jsx'
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <UserProvider>
      <BrowserRouter>
        <div className='page'>
          <Header />
          <Footer />
        </div>
      </BrowserRouter>
    </UserProvider>
  )
}

export default App
