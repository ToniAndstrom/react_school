import React from 'react'

const Dashboard = ({user}) => {
    if (user==="Toni"){
  return (
    <div><h1>Welcome to our user application {user}</h1></div>
    );
  }else{
    return (
    <div><h2>First time {user}?</h2></div>
    )
  };
  <div>
    return
    ((user === "Toni"))? <h1>Welcome back darling</h1> : <h1></h1>
        
    
  </div>
};

export default Dashboard;