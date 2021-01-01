import React from "react";
import "./homestyles.css"
import { useEffect } from 'react';
import $ from 'jquery';
import 'react-bootstrap';
import { Link } from 'react-router-dom'
import { fn } from "moment";



const HomePage= () => {
    function scrollFunction() {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
         // document.getElementById("navbar").style.padding = "30px 10px";
         // document.getElementById("logo").style.fontSize = "25px";
        } else {
          //document.getElementById("navbar").style.padding = "80px 10px";
          //document.getElementById("logo").style.fontSize = "35px";
          //alert("2");
        }
      }
      window.onscroll = function() {scrollFunction()};
      

      return(
          <>
          
          <div id="home" className="home">
        <nav className="navbar navbar-expand-lg navbar-expand-xl navbar-dark fixed-top" id="mainNav">
            <div className="container" style = {{marginLeft: "10%", marginRight: "10%"}}>
                <a className="navbar-brand js-scroll-trigger" href="#page-top"><img src={require("../assets/img/logo.png")} alt="" /></a>
                {/* <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Dashboard
                    <i className="fas fa-bars ml-1"></i>
                </button> */}
                {/* <!-- <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav text-uppercase ml-auto">
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#services">Services</a></li>
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a></li>
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#about">About</a></li>
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#team">Team</a></li>
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#contact">Contact</a></li>
                    </ul>
                </div> --> */}
            </div>
        </nav>
        {/* <!-- Masthead--> */}
        <header className="masthead">
            <div className="container" >
                <div className="masthead-subheading">Welcome To Omparashar</div>
                {/* <!-- <div class="masthead-heading text-uppercase">It's Nice To Meet You</div> --> */}
               
                <p>

                </p>
                
            </div>
           
           
        </header>
        <center style={{"background-color":"white"}}>
            <a style={{marginTop:"-30px"}} className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Explore</a>
        </center>
        
   
        <section className="page-section" id="services">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Services</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div className="row text-center justify-content-center">
                    
                    <div className="col-md-3 ">
                        <div className="team-member">
                            <Link to='/transition'>
                            <img className="mx-auto" style={{height:"200px"}} src={require("../assets/img/team/1.png")} alt="" />
                            <h4 className="my-3">Planet Transition</h4>
                            </Link>
                        <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                      
                        </div>
                            </div>
                    <div className="col-md-3">
                                <div className="team-member">
                                    <Link to='/panchang'>
                                    <img className="mx-auto" style={{height:"200px"}} src={require("../assets/img/team/2.png")} alt="" />
                                    <h4 className="my-3">Panchang</h4>
                                     </Link>
                                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                    
                                </div>
                                    </div>
                    <div className="col-md-3">
                                        <div className="team-member">
                                            <img className="mx-auto" style={{height:"200px"}} src={require("../assets/img/team/3.png")} alt="" />
                                            <h4 className="my-3">Dancing of Planets</h4>
                                        <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                            
                                        </div>
                                            </div>
                </div>
            </div>
        </section>

        <section className="page-section" id="contact">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Contact Us</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                   
                </div>
               <div>
                <div className="col-md-12 text-center" style={{color:"white", paddingTop:"100px",paddingBottom: "140px"}}>
                    
                    <ul style={{listStyle: "none"}}>
                      <li>
                        <p><strong>Address</strong> : #135 block, xyz , USA</p>
                      </li>
                      <li>
                        <p><strong>Phone</strong> : +91-9876543210</p>
                      </li>
                      <li>
                        <p><strong>Email</strong> : example@mail.com</p>
                      </li>
                    </ul>
  
                   
                  </div>

               </div>
            </div>
        </section>
        <footer className="footer py-4">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 text-lg-left">Copyright © Your Website 2020</div>
                    <div className="col-lg-4 my-3 my-lg-0">
                        <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                    <div className="col-lg-4 text-lg-right">
                        <a className="mr-3" href="#!">Privacy Policy</a>
                        <a href="#!">Terms of Use</a>
                    </div>
                </div>
            </div>
        </footer>
       </div>

     </>

      );
  };





export default HomePage;
