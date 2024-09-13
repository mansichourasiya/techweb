import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Technogiq from '../../../public/Technogiq logo.png'

export default function Navbar() {

  const [bgColor, setBgColor] = useState({marginTop:"0px"});
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingDown = currentScrollPos > prevScrollPos;

      if (isScrollingDown) {
        setBgColor({ marginTop: "-270px" }); // Hide navbar
      } else {
        setBgColor({ marginTop: "0px" }); // Show navbar
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

   

  return (
    <>
      <nav className="nav"  style={ bgColor }>
    {/* //    <h2><span className="color">T</span>echnogi<span  className="color">q</span><br/>IT solutions</h2> */}
       
        <img id="main_logo" src={Technogiq}/>
        <div className="navlink">
          <Link to="/">Home</Link>
          <Link to="/service">Service</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
    </>
  );
}
