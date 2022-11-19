import Head from 'next/head'
import App from '../components/App'
import { useState, useEffect } from 'react'




export default function Home() {

    const [darkMode, setDarkMode] = useState(true)

    // darkMode ? 
  

  return (
      <>
        <App />
      </>

  )
}
