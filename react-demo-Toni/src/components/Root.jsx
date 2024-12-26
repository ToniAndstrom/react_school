import Header from "../components/Header";
import Footer from "../components/Footer";
import React from 'react'
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
    
       <Header/>

    <main>
      <Outlet/>
      {<h2> Content will be changing in here</h2>}
    </main>
      <Footer/>
    
    </>
  )
}

export default Root