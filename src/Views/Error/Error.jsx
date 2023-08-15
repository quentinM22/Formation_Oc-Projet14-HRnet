import React from 'react'
import Header from '../../Components/Header/Header'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  useEffect(()=>{
    document.title = "HRnet - Error"
  })
  return (
    <>
    <Header /> 
    <main className='error-main'>
      <h2>404 Error</h2>
      <p>This Page doesn't exist.</p>
      <Link to="/">Back to Home Page</Link>
    </main>
    </>
    
  )
}

export default Error