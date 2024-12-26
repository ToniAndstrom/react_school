import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


const Box = (props) =>{
return(
  <div>
    <p>name: {props.name}</p>
    <p>Title: {props.title}</p>
    <p>Age: {props.age}</p>
  </div>
)
  }

const name = "Toni Andström";
const first_page = 2024;

const Demo = () =>{
  return(
  <div>
    <h1>
      Hello my name is {name}</h1>
      <p>I have {2024 - first_page} years of building websites experience</p>
      <Box name="Toni" title="student" age="41"/>
      <Box name="Toni" title="student" age="41"/>
      <Box name="Toni" title="student" age="41"/>
      <Box name="Toni" title="student" age="41"/>
      <Box />
  </div>
  );
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Demo/>
  </React.StrictMode>,
)
