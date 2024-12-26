import React from 'react'
import {Link} from "react-router-dom"
import "./Home.css";

const Home = () => {
  return (
    <div className="landing_page">
       <Link to="/animals" className="item1"><p className="home_p">Animals</p></Link>
       <Link to="/birds" className="item2"><p className="home_p">Birds</p></Link>
      <Link to="/insects" className="item3"><p className="home_p">Insects</p></Link>
      <Link to="/fishes" className="item4"><p className="home_p">Fishes</p></Link>
    </div>
  );
};

export default Home