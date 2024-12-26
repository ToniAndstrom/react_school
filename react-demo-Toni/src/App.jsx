import './App.css'
import Box from "./components/Box"
import { useState } from 'react'
import Header from './components/Header'
import Footer from "./components/Footer"
import Counter from './components/Counter'
import Form from './components/Form'
import View from './View'
import Dashboard from './pages/Dashboard'
import {RouterProvider, createBrowserRouter}
from "react-router-dom";
import About from './pages/About'
import Home from './pages/Home.jsx'
import Persons from './pages/Persons.jsx'
import Root from "./components/Root.jsx"
import ErrorPage from './pages/ErrorPage.jsx'



function App() {

  const router = createBrowserRouter([
    {
      path:"/", 
    element: <Root/>,
    errorElement:<ErrorPage/>,
  children: [
    {path:"/", element: <Home/>},
    {path:"/about", element: <About/>},
    {path:"/persons", element: <Persons/>}

  ]
}
  
])

const[isLoggedIn, setIsLoggedIn] = useState(true);
const displayHandler = () => {
  setIsLoggedIn(!isLoggedIn);
}

const [inputValue, setInputValue] = useState("")
const [formData, setFormData] = useState({
firstname:"",
lastname:"",
phone:"",
email:"",
message:""
});

const [counter, setCounter] = useState (0)

const [persons, setPersons] = useState ([
{ id:1,name:"Toni", title:"student", location :"Finland"},
{id:2, name:"Tsubasa", title:"dancer", location :"Japan"},
{id:3, name:"Vesa", title:"DJ", location :"England"}
])

/*const changeHandler = (event) => {
  setInputValue(event.target.value);
};*/
const changeFormHandler = (event) => {
  const {name, value} = event.target;

  setFormData((prevState) => ({...prevState, [name]:value}));
  console.log(formData);
}
 

const clickIncHandler = () => {
  setCounter(counter+1) ;
}

const clickDecHandler = () => {
  setCounter(counter-1) ;
}
const clickHandler = () => {
  setCounter(0);
}
const clickHandlerMultiplyByTwo = () =>{
setCounter(counter*2) ;
}

  return (
 <RouterProvider router={router}/>
  
   /*<Counter counterP= {counter} 
    clickDecHandler={clickDecHandler}
    clickIncHandler={clickIncHandler}
    clickHandler={clickHandler}
    clickHandlerMultiplyByTwo={clickHandlerMultiplyByTwo}
    />
    
    {persons.map((person) => (
      <Box key={person.id}
      name={person.name} title={person.title} location ={person.location}
     />))}
    <h1>Hello my name is Toni</h1>*/
     /*<Form changeHandler={changeFormHandler}/>
     <View {...formData}/>*/
  
  )
}

export default App