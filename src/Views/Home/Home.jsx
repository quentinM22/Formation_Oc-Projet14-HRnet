import React, { useEffect } from 'react'
import Header from '../../Components/Header/Header'
import Form from '../../Components/Form/Form'

import img1 from "../../Assets/hr_text1.png"
/**
 * Home - View 
 * @returns {JSX.Element} - Home View JSX element.
 */
const Home = () => {
  useEffect(()=>{
    document.title = "HRnet - Form"
  })
  return (
    <>
    <Header title="HRnet"/>
    <main>
        <div 
        className='image'
        style={{
          backgroundImage: `url(${img1})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          width: "calc(50% - 25px)",
          height: '300px'
          }}
        ></div>
        <Form />
    </main>
    </>
  )
}

export default Home