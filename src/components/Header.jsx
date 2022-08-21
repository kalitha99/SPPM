import React from "react";
import "./Header.css";
import AdminSlider from "./SliderAdmin";
import logo from "../images/logo.jpeg";
import useUser from "../services/UserContext";
import { AiOutlineLogin } from "react-icons/ai";
import useRequest from "../services/RequestContext";
import { useHistory } from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';

import img1 from '../images/slide_img01.jpg';
import img2 from '../images/slide_img02.jpg';
import img3 from '../images/slide_img03.jpg';
import img4 from '../images/slide_img04.jpg';
import img5 from '../images/slide_img05.jpg';

function Header() {
  const { user } = useUser();
  console.log("User", user);

  const { updateToken } = useRequest();
  const { setUser } = useUser();

  const history = useHistory();
  const logout = async () => {
    await updateToken();
    setUser({});

    history.push("/login");
    window.location.reload(true);
  }; 

  if (user == undefined) {
    return (
      <>
        <div className="conatiner"> {/* ----------------------- When there is no login opportunity */}
          <div className="header">
          <a href="/"><img src={logo} alt="logo" className="logo" /></a>

            <ul className="pages">
              <a href="/">
                Home
              </a>
             
              <a href="/AboutUs">
                About
              </a>
              <a href="/Products">
                Products
            </a>
              <a href="/ContactUs">
                Contact Us
              </a>
              <a href="/login">
                My Profile
              </a>
              <button type="button" class="btn btn-outline-secondary" onClick={logout} style={{marginLeft:"50px",backgroundColor:"transparent", border:"none"}}><AiOutlineLogin />&nbsp; Login/Sign up</button>
            </ul>
          </div>
        </div>
      </>
    );
  } else if (user.role == "Customer") { //  ------------------- When there is a Customer login opportunity 
    return (
      <>
        <div className="conatiner">
          <div className="header">
            
            <a href="/"><img src={logo} alt="logo" className="logo" /></a>

            <ul className="pages">
              <a href="/">
                Home
              </a>

              <a href="/AboutUs">
                About
              </a>
              <a href="/Products">
                Products
              </a>
              <a href="/ContactUs">
                Contact Us
              </a>
              <a href="/Profile">
                My Profile
              </a>
              <a href="/Cart">
                Cart
              </a>
              <button type="button" class="btn btn-outline-secondary" onClick={logout} style={{marginLeft:"50px",backgroundColor:"transparent", border:"none"}}><AiOutlineLogin />&nbsp; Logout</button>
            </ul>
          </div>
        </div>
      </>
    );
  } else { //  --------------------------------------------------- When there is an admin login opportunity 
    return (
      <>
        <div className="conatiner">
          <div className="header">
            <AdminSlider />
            <a href="/AdminDashboard"><img src={logo} alt="logo" className="logo" /></a>

            <ul className="pages">
              <a href="/AdminDashboard">
                Home
              </a>
              <a href="/Products">
                Products
              </a>
              <a href="/Cart">
                Cart
              </a>

              <button type="button" class="btn btn-outline-secondary" onClick={logout} style={{marginLeft:"50px",backgroundColor:"transparent", border:"none"}}><AiOutlineLogin />&nbsp; Logout</button>
            </ul>
          </div>
        </div>
      </>
    );
  }
}
export default Header;
