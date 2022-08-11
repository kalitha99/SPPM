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
              <NavDropdown id="nav-dropdown-dark-example" title="Menu" menuVariant="dark">
                  <NavDropdown.Item href="/"><img  style={{height: 30, width: 30}} class="rounded-circle" src={img1} />&nbsp;&nbsp; Action </NavDropdown.Item>
                  <NavDropdown.Item href="/"><img  style={{height: 30, width: 30}} class="rounded-circle" src={img2} />&nbsp;&nbsp; Another action </NavDropdown.Item>
                  <NavDropdown.Item href="/"><img  style={{height: 30, width: 30}} class="rounded-circle" src={img3} />&nbsp;&nbsp; Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/"><img  style={{height: 30, width: 30}} class="rounded-circle" src={img4} />&nbsp;&nbsp; Separated link </NavDropdown.Item>
              </NavDropdown>
              <a href="/AboutUs">
                About
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
              <NavDropdown id="nav-dropdown-dark-example" title="Menu" menuVariant="dark">
                  <NavDropdown.Item href="/"> Action </NavDropdown.Item>
                  <NavDropdown.Item href="/"> Another action </NavDropdown.Item>
                  <NavDropdown.Item href="/">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/"> Separated link </NavDropdown.Item>
              </NavDropdown>
              <a href="/AboutUs">
                About
              </a>
              <a href="/ContactUs">
                Contact Us
              </a>
              <a href="/Profile">
                My Profile
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
              <a href="/Notice">
                Notice
              </a>
              <a href="/AdminUploads">
                Resources
              </a>
              <a href="/AboutUs">
                About
              </a>
              <a href="/ContactUs">
                Contact Us
              </a>
              <a href="#">
                My Profile
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
