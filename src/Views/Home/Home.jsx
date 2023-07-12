import React from 'react'
import Header from '../../Components/Header/Header'
import Form from '../../Components/From/Form'

import img1 from "../../Assets/hr_text1.png"

const Home = () => {
  return (
    <>
    <Header title="HRnet"/>
    <main>
        <div 
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