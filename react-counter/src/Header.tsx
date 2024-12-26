
import {FC} from "react";
import logo from "./assets/react.svg"

interface Props {}

const Header: FC<Props> = () => {
  return (
    <div className="py-3 px-2 " style={{borderBottom: "3px solid white"}}>
      <img src={logo}alt="logo" style={{height:"100px", verticalAlign:"top"}} />
      <span className="h2, pt -4 m-2 text-white">REACT-COUNTER</span>
    </div>
  )
};

export default Header;