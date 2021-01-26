import React from "react";
import 'react-bootstrap';



const Dashboard= () => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
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
      

      return (
          <>
{/* 
            <!-- Topbar Start --> */}
            <div class="navbar-custom">
                <div class="container-fluid">
                    <ul class="list-unstyled topnav-menu float-right mb-0">

                        <li class="d-none d-lg-block">
                            <form class="app-search">
                                <div class="app-search-box dropdown">
                                    <div class="input-group">
                                        <input type="search" class="form-control" placeholder="Search..." id="top-search"/>
                                        <div class="input-group-append">
                                            <button class="btn" type="submit">
                                                <i class="fe-search"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="dropdown-menu dropdown-lg" id="search-dropdown">
                                        {/* <!-- item--> */}
                                        <div class="dropdown-header noti-title">
                                            <h5 class="text-overflow mb-2">Found 22 results</h5>
                                        </div>
            
                                        {/* <!-- item--> */}
                                        <a href="/" class="dropdown-item notify-item">
                                            <i class="fe-home mr-1"></i>
                                            <span>Analytics Report</span>
                                        </a>
            
                                        {/* <!-- item--> */}
                                        <a href="/" class="dropdown-item notify-item">
                                            <i class="fe-aperture mr-1"></i>
                                            <span>How can I help you?</span>
                                        </a>
                            
                                        {/* <!-- item--> */}
                                        <a href="/" class="dropdown-item notify-item">
                                            <i class="fe-settings mr-1"></i>
                                            <span>User profile settings</span>
                                        </a>

                                        {/* <!-- item--> */}
                                        <div class="dropdown-header noti-title">
                                            <h6 class="text-overflow mb-2 text-uppercase">Users</h6>
                                        </div>

                                        <div class="notification-list">
                                            {/* <!-- item--> */}
                                            <a href="/" class="dropdown-item notify-item">
                                                <div class="media">
                                                    <img class="d-flex mr-2 rounded-circle" src="../assets/images/users/user-1.jpg" alt="Generic placeholder" height="32"/>
                                                    <div class="media-body">
                                                        <h5 class="m-0 font-14">Erwin E. Brown</h5>
                                                        <span class="font-12 mb-0">UI Designer</span>
                                                    </div>
                                                </div>
                                            </a>

                                            {/* <!-- item--> */}
                                            <a href="/" class="dropdown-item notify-item">
                                                <div class="media">
                                                    <img class="d-flex mr-2 rounded-circle" src="../assets/images/users/user-1.jpg" alt="Generic placeholder" height="32"/>
                                                    <div class="media-body">
                                                        <h5 class="m-0 font-14">Jacob Deo</h5>
                                                        <span class="font-12 mb-0">Developer</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
            
                                    </div>  
                                </div>
                            </form>
                        </li>
    
                        <li class="dropdown d-inline-block d-lg-none">
                            <a class="nav-link dropdown-toggle arrow-none waves-effect waves-light" data-toggle="dropdown" href="/transition" role="button" aria-haspopup="false" aria-expanded="false">
                                <i class="fe-search noti-icon"></i>
                            </a>
                            <div class="dropdown-menu dropdown-lg dropdown-menu-right p-0">
                                <form class="p-3">
                                    <input type="text" class="form-control" placeholder="Search ..." aria-label="Recipient's username"/>
                                </form>
                            </div>
                        </li>
    
                        <li class="dropdown d-none d-lg-inline-block">
                            <a class="nav-link dropdown-toggle arrow-none waves-effect waves-light" data-toggle="fullscreen" href="/transition">
                                <i class="fe-maximize noti-icon"></i>
                            </a>
                        </li>
    
                        <li class="dropdown d-none d-lg-inline-block topbar-dropdown">
                            <a class="nav-link dropdown-toggle arrow-none waves-effect waves-light" data-toggle="dropdown" href="/transition" role="button" aria-haspopup="false" aria-expanded="false">
                                <i class="fe-grid noti-icon"></i>
                            </a>
                            <div class="dropdown-menu dropdown-lg dropdown-menu-right">
    
                                <div class="p-lg-1">
                                    <div class="row no-gutters">
                                        <div class="col">
                                            <a class="dropdown-icon-item" href="/transition">
                                                <img src="../assets/images/brands/slack.png" alt="slack"/>
                                                <span>Slack</span>
                                            </a>
                                        </div>
                                        <div class="col">
                                            <a class="dropdown-icon-item" href="/transition">
                                                <img src="../assets/images/brands/github.png" alt="Github"/>
                                                <span>GitHub</span>
                                            </a>
                                        </div>
                                        <div class="col">
                                            <a class="dropdown-icon-item" href="/transition">
                                                <img src="../assets/images/brands/dribbble.png" alt="dribbble"/>
                                                <span>Dribbble</span>
                                            </a>
                                        </div>
                                    </div>
    
                                    <div class="row no-gutters">
                                        <div class="col">
                                            <a class="dropdown-icon-item" href="/transition">
                                                <img src="../assets/images/brands/bitbucket.png" alt="bitbucket"/>
                                                <span>Bitbucket</span>
                                            </a>
                                        </div>
                                        <div class="col">
                                            <a class="dropdown-icon-item" href="/transition">
                                                <img src="../assets/images/brands/dropbox.png" alt="dropbox"/>
                                                <span>Dropbox</span>
                                            </a>
                                        </div>
                                        <div class="col">
                                            <a class="dropdown-icon-item" href="/transition">
                                                <img src="../assets/images/brands/g-suite.png" alt="G Suite"/>
                                                <span>G Suite</span>
                                            </a>
                                        </div>
                            
                                    </div>
                                </div>
    
                            </div>
                        </li>
    
                       
            
                        <li class="dropdown notification-list topbar-dropdown">
                            <a class="nav-link dropdown-toggle waves-effect waves-light" data-toggle="dropdown" href="/transition" role="button" aria-haspopup="false" aria-expanded="false">
                                <i class="fe-bell noti-icon"></i>
                                <span class="badge badge-danger rounded-circle noti-icon-badge">9</span>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right dropdown-lg">
    
                                {/* <!-- item--> */}
                                <div class="dropdown-item noti-title">
                                    <h5 class="m-0">
                                        <span class="float-right">
                                            <a href="/transition" class="text-dark">
                                                <small>Clear All</small>
                                            </a>
                                        </span>Notification
                                    </h5>
                                </div>
    
                                <div class="noti-scroll" data-simplebar>
    
                                    {/* <!-- item--> */}
                                    <a href="/" class="dropdown-item notify-item active">
                                        <div class="notify-icon">
                                            <img src="../assets/images/users/user-1.jpg" class="img-fluid rounded-circle" alt="" /> </div>
                                        <p class="notify-details">Cristina Pride</p>
                                        <p class="text-muted mb-0 user-msg">
                                            <small>Hi, How are you? What about our next meeting</small>
                                        </p>
                                    </a>
    
                                    {/* <!-- item--> */}
                                    <a href="/" class="dropdown-item notify-item">
                                        <div class="notify-icon bg-primary">
                                            <i class="mdi mdi-comment-account-outline"></i>
                                        </div>
                                        <p class="notify-details">Caleb Flakelar commented on Admin
                                            <small class="text-muted">1 min ago</small>
                                        </p>
                                    </a>
{/*     
                                    <!-- item--> */}
                                    <a href="/" class="dropdown-item notify-item">
                                        <div class="notify-icon">
                                            <img src="../assets/images/users/user-4.jpg" class="img-fluid rounded-circle" alt="" /> </div>
                                        <p class="notify-details">Karen Robinson</p>
                                        <p class="text-muted mb-0 user-msg">
                                            <small>Wow ! this admin looks good and awesome design</small>
                                        </p>
                                    </a>
    
                                    {/* <!-- item--> */}
                                    <a href="/" class="dropdown-item notify-item">
                                        <div class="notify-icon bg-warning">
                                            <i class="mdi mdi-account-plus"></i>
                                        </div>
                                        <p class="notify-details">New user registered.
                                            <small class="text-muted">5 hours ago</small>
                                        </p>
                                    </a>
    
                                    {/* <!-- item--> */}
                                    <a href="/" class="dropdown-item notify-item">
                                        <div class="notify-icon bg-info">
                                            <i class="mdi mdi-comment-account-outline"></i>
                                        </div>
                                        <p class="notify-details">Caleb Flakelar commented on Admin
                                            <small class="text-muted">4 days ago</small>
                                        </p>
                                    </a>
    
                                    {/* <!-- item--> */}
                                    <a href="/" class="dropdown-item notify-item">
                                        <div class="notify-icon bg-secondary">
                                            <i class="mdi mdi-heart"></i>
                                        </div>
                                        <p class="notify-details">Carlos Crouch liked
                                            <b>Admin</b>
                                            <small class="text-muted">13 days ago</small>
                                        </p>
                                    </a>
                                </div>
    
                                {/* <!-- All--> */}
                                <a href="/" class="dropdown-item text-center text-primary notify-item notify-all">
                                    View all
                                    <i class="fe-arrow-right"></i>
                                </a>
    
                            </div>
                        </li>
    
                        <li class="dropdown notification-list topbar-dropdown">
                            <a class="nav-link dropdown-toggle nav-user mr-0 waves-effect waves-light" data-toggle="dropdown" href="/" role="button" aria-haspopup="false" aria-expanded="false">
                                <img src="../assets/images/users/user-1.jpg" alt="user" class="rounded-circle"/>
                                <span class="pro-user-name ml-1">
                                    Geneva <i class="mdi mdi-chevron-down"></i> 
                                </span>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right profile-dropdown ">
                                {/* <!-- item--> */}
                                <div class="dropdown-header noti-title">
                                    <h6 class="text-overflow m-0">Welcome !</h6>
                                </div>
    
                                {/* <!-- item--> */}
                                <a href="/" class="dropdown-item notify-item">
                                    <i class="fe-user"></i>
                                    <span>My Account</span>
                                </a>
    
                                {/* <!-- item--> */}
                                <a href="/" class="dropdown-item notify-item">
                                    <i class="fe-settings"></i>
                                    <span>Settings</span>
                                </a>
    
                                {/* <!-- item--> */}
                                <a href="/" class="dropdown-item notify-item">
                                    <i class="fe-lock"></i>
                                    <span>Lock Screen</span>
                                </a>
    
                                <div class="dropdown-divider"></div>
    
                                {/* <!-- item--> */}
                                <a href="/" class="dropdown-item notify-item">
                                    <i class="fe-log-out"></i>
                                    <span>Logout</span>
                                </a>
    
                            </div>
                        </li>
    
                       
    
                    </ul>
    
                    {/* <!-- LOGO --> */}
                    <div class="logo-box">
                        <a href="/" class="logo logo-dark text-center">
                            <span class="logo-sm">
                                <img src="assets/images/logo-sm.png" alt="" height="40"/>
                                {/* <!-- <span class="logo-lg-text-light">UBold</span> --> */}
                            </span>
                            <span class="logo-lg">
                                <img src="assets/images/logo-dark.png" alt="" height="40"/>
                                {/* <!-- <span class="logo-lg-text-light">U</span> --> */}
                            </span>
                        </a>
    
                        <a href="/" class="logo logo-light text-center">
                            <span class="logo-sm">
                                <img src="assets/images/logo-sm.png" alt="" height="40"/>
                            </span>
                            <span class="logo-lg">
                                <img src="assets/images/logo-light.png" alt="" height="40"/>
                            </span>
                        </a>
                    </div>
    
                    <ul class="list-unstyled topnav-menu topnav-menu-left m-0">
                        <li>
                            <button class="button-menu-mobile waves-effect waves-light">
                                <i class="fe-menu"></i>
                            </button>
                        </li>

                        <li>
                            {/* <!-- Mobile menu toggle (Horizontal Layout)--> */}
                            <a class="navbar-toggle nav-link" data-toggle="collapse" data-target="#topnav-menu-content" href="/">
                                <div class="lines">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </a>
                            {/* <!-- End mobile menu toggle--> */}
                        </li>   
            
                       
                    </ul>
                    <div class="clearfix"></div>
                </div>
            </div>
            {/* <!-- end Topbar -->

            <!-- ========== Left Sidebar Start ========== --> */}
            <div class="left-side-menu">

                <div class="h-100" data-simplebar>

                    {/* <!-- User box --> */}
                    <div class="user-box text-center">
                        <img src="../assets/images/users/user-1.jpg" alt="user-img" title="Mat Helme"
                            class="rounded-circle avatar-md"/>
                        <div class="dropdown">
                            <a href="/" class="text-dark dropdown-toggle h5 mt-2 mb-1 d-block"
                                data-toggle="dropdown">Geneva Kennedy</a>
                            <div class="dropdown-menu user-pro-dropdown">

                                {/* <!-- item--> */}
                                <a href="/" class="dropdown-item notify-item">
                                    <i class="fe-user mr-1"></i>
                                    <span>My Account</span>
                                </a>

                                {/* <!-- item--> */}
                                <a href="/" class="dropdown-item notify-item">
                                    <i class="fe-settings mr-1"></i>
                                    <span>Settings</span>
                                </a>

                                {/* <!-- item--> */}
                                <a href="/" class="dropdown-item notify-item">
                                    <i class="fe-lock mr-1"></i>
                                    <span>Lock Screen</span>
                                </a>

                                {/* <!-- item--> */}
                                <a href="/" class="dropdown-item notify-item">
                                    <i class="fe-log-out mr-1"></i>
                                    <span>Logout</span>
                                </a>

                            </div>
                        </div>
                        <p class="text-muted">Admin Head</p>
                    </div>

                    {/* <!--- Sidemenu --> */}
                    <div id="sidebar-menu">

                        <ul id="side-menu">

                           
                
                            <li>
                                <a href="index.html" data-toggle="collapse">
                                    <i data-feather="airplay"></i>
                                   
                                    <span> Dashboard </span>
                                </a>
                               
                            </li>

                            <li class="menu-title mt-2">Work Space</li>

                           

                            <li>
                                <a href="#sidebarEcommerce" data-toggle="collapse">
                                    <i data-feather="calendar"></i>
                                    <span> Planet Transition </span>
                                    <span class="menu-arrow"></span>
                                </a>
                                <div class="collapse" id="sidebarEcommerce">
                                    <ul class="nav-second-level">
                                        <li>
                                            <a href="/transition">Galactic View</a>
                                        </li>
                                        <li>
                                            <a href="ecommerce-products.html">Traces</a>
                                        </li>
                                        <li>
                                            <a href="ecommerce-product-detail.html">Planet Jouney</a>
                                        </li>
                                        <li>
                                            <a href="ecommerce-product-edit.html">Snapshot</a>
                                        </li>
                                       
                                    </ul>
                                </div>
                            </li>

                            <li>
                                <a href="#sidebarCrm" data-toggle="collapse">
                                    <i data-feather="users"></i>
                                    <span> Panchang </span>
                                    <span class="menu-arrow"></span>
                                </a>
                                <div class="collapse" id="sidebarCrm">
                                    <ul class="nav-second-level">
                                        <li>
                                            <a href="/transition">Natal chart</a>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <a href="apps-calendar.html">
                                    <i data-feather="calendar"></i>
                                    <span> Planet Transitions </span>
                                </a>
                            </li>

                            <li>
                                <a href="apps-chat.html">
                                    <i data-feather="users"></i>
                                    <span> Panchang </span>
                                </a>
                            </li>
                           

                            
                        </ul>

                    </div>
                    {/* <!-- End Sidebar --> */}

                    <div class="clearfix"></div>

                </div>
                {/* <!-- Sidebar -left --> */}

            </div>
            {/* <!-- Left Sidebar End -->

            <!-- ============================================================== -->
            <!-- Start Page Content here -->
            <!-- ============================================================== --> */}

            <div class="content-page">
                <div class="content">

                    {/* <!-- Start Content--> */}
                    <div class="container-fluid">
                        
                        {/* <!-- start page title --> */}
                        <div class="row">
                            <div class="col-12">
                                <div class="page-title-box">
                                    <div class="page-title-right">
                                        <ol class="breadcrumb m-0">
                                            <li class="breadcrumb-item"><a href="/">Omparashar</a></li>
                                            <li class="breadcrumb-item active">Dashboard</li>
                                        </ol>
                                    </div>
                                    <h4 class="page-title">Dashboard</h4>
                                </div>
                            </div>
                        </div>     
                        {/* <!-- end page title -->  */}

                        <div class="row">
                            <div class="col-md-6 col-xl-3">
                                <div class="card-box">
                                    <div class="row">
                                        <div class="col-6">
                                            <div class="avatar-sm bg-blue rounded">
                                                <i class="fe-aperture avatar-title font-22 text-white"></i>
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="text-right">
                                                <h3 class="text-dark my-1"><span data-plugin="counterup">23.2</span>°</h3>
                                                <p class="text-muted mb-1 text-truncate">Jupiter</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mt-3">
                                        <h6 class="text-uppercase">Today <span class="float-right"> 16:09</span></h6>
                                        <div class="progress progress-sm m-0">
                                            <div class="progress-bar bg-blue" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{"width": "60%"}}>
                                                <span class="sr-only">60% Complete</span>
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                                {/* <!-- end card-box--> */}
                            </div> 
                            {/* <!-- end col --> */}

                            <div class="col-md-6 col-xl-3">
                                <div class="card-box">
                                    <div class="row">
                                        <div class="col-6">
                                            <div class="avatar-sm bg-success rounded">
                                                <i class="fe-arrow-down avatar-title font-22 text-white"></i>
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="text-right">
                                                <h3 class="text-dark my-1"><span data-plugin="counterup">83.2</span>°</h3>
                                                <p class="text-muted mb-1 text-truncate">Venus</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mt-3">
                                        <h6 class="text-uppercase">Time <span class="float-right">17:08 </span></h6>
                                        <div class="progress progress-sm m-0">
                                            <div class="progress-bar bg-success" role="progressbar" aria-valuenow="49" aria-valuemin="0" aria-valuemax="100" style={{"width": "49%"}}>
                                                <span class="sr-only">49% Complete</span>
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                                {/* <!-- end card-box--> */}
                            </div>
                             {/* <!-- end col --> */}

                            <div class="col-md-6 col-xl-3">
                                <div class="card-box">
                                    <div class="row">
                                        <div class="col-6">
                                            <div class="avatar-sm bg-warning rounded">
                                                <i class="fe-arrow-up avatar-title font-22 text-white"></i>
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="text-right">
                                                <h3 class="text-dark my-1"><span data-plugin="counterup">213.1</span>°</h3>
                                                <p class="text-muted mb-1 text-truncate">Mars</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mt-3">
                                        <h6 class="text-uppercase">Tomorrow <span class="float-right">21:09</span>°</h6>
                                        <div class="progress progress-sm m-0">
                                            <div class="progress-bar bg-warning" role="progressbar" aria-valuenow="18" aria-valuemin="0" aria-valuemax="100" style={{"width": "18%"}}>
                                                <span class="sr-only">18% Complete</span>
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                                {/* <!-- end card-box--> */}
                            </div>
                             {/* <!-- end col --> */}

                            <div class="col-md-6 col-xl-3">
                                <div class="card-box">
                                    <div class="row">
                                        <div class="col-6">
                                            <div class="avatar-sm bg-info rounded">
                                                <i class="fe-home avatar-title font-22 text-white"></i>
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="text-right">
                                                <h3 class="text-dark my-1"><span data-plugin="counterup">178</span>°</h3>
                                                <p class="text-muted mb-1 text-truncate">Saturn</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mt-3">
                                        <h6 class="text-uppercase">Tonight <span class="float-right">22:25</span></h6>
                                        <div class="progress progress-sm m-0">
                                            <div class="progress-bar bg-info" role="progressbar" aria-valuenow="74" aria-valuemin="0" aria-valuemax="100" style={{"width":"74%"}}>
                                                <span class="sr-only">74% Complete</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                 {/* <!-- end card-box--> */}
                            </div>
                             {/* <!-- end col --> */}
                        </div>
                        {/* <!-- end row --> */}

                        <div class="row">

                            <div class="col-xl-4 col-md-6">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="card-widgets">
                                            <a href="/" data-toggle="reload"><i class="mdi mdi-refresh"></i></a>
                                            <a data-toggle="collapse" href="#cardCollpase3" role="button" aria-expanded="false" aria-controls="cardCollpase3"><i class="mdi mdi-minus"></i></a>
                                            <a href="/" data-toggle="remove"><i class="mdi mdi-close"></i></a>
                                        </div>
                                        <h4 class="header-title mb-0">Galactic View</h4>

                                        <div id="cardCollpase3" class="collapse pt-3 show">
                                            <div class="text-center">
                                                <div id="total-users" data-colors="#00acc1,#4b88e4,#e3eaef,#fd7e14"></div>
                                                <div class="row mt-3">
                                                    <div class="col-3">
                                                       
                                                    </div>
                                                    <div class="col-6">
                                                        <button type="button" class="btn btn-outline-primary waves-effect waves-light">Explore Here</button>
                                                    </div>
                                                    <div class="col-3">
                                                        
                                                    </div>
                                                </div> 
                                                {/* <!-- end row --> */}
                                            </div>
                                        </div> 
                                        {/* <!-- collapsed end --> */}
                                    </div> 
                                    {/* <!-- end card-body --> */}
                                </div> 
                                {/* <!-- end card--> */}
                            </div> 

                           

                            <div class="col-xl-4 col-md-6">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="card-widgets">
                                            <a href="/" data-toggle="reload"><i class="mdi mdi-refresh"></i></a>
                                            <a data-toggle="collapse" href="#cardCollpase2" role="button" aria-expanded="false" aria-controls="cardCollpase2"><i class="mdi mdi-minus"></i></a>
                                            <a href="/" data-toggle="remove"><i class="mdi mdi-close"></i></a>
                                        </div>
                                        <h4 class="header-title mb-0">Traces View</h4>

                                        <div id="cardCollpase2" class="collapse pt-3 show">
                                            <div class="text-center">
                                                <div id="income-amounts" data-colors="#00acc1"></div>
                                                <div class="row mt-3">
                                                    <div class="col-3">
                                                       
                                                    </div>
                                                    <div class="col-6">
                                                        <button type="button" class="btn btn-outline-success waves-effect waves-light">Move to Traces</button>
                                                    </div>
                                                    <div class="col-3">
                                                    </div>
                                                </div> 
                                                {/* <!-- end row --> */}
                                            </div>
                                        </div> 
                                        {/* <!-- collapsed end --> */}
                                    </div>
                                     {/* <!-- end card-body --> */}
                                </div>
                                 {/* <!-- end card--> */}
                            </div>
                             {/* <!-- end col--> */}

                            <div class="col-xl-4 col-md-12">
                                {/* <!-- Portlet card --> */}
                                <div class="card">
                                    <div class="card-body">
                                        <div class="card-widgets">
                                            <a href="/" data-toggle="reload"><i class="mdi mdi-refresh"></i></a>
                                            <a data-toggle="collapse" href="#cardCollpase1" role="button" aria-expanded="false" aria-controls="cardCollpase1"><i class="mdi mdi-minus"></i></a>
                                            <a href="/" data-toggle="remove"><i class="mdi mdi-close"></i></a>
                                        </div>
                                        <h4 class="header-title mb-0">Planet Jouney </h4>

                                        <div id="cardCollpase1" class="collapse pt-3 show">
                                            <div class="text-center">
                                                <div id="lifetime-sales" data-colors="#00acc1,#f1556c"></div>
        
                                                <div class="row mt-3">
                                                    <div class="col-3">
                                                       
                                                    </div>
                                                    <div class="col-6">
                                                        <button type="button" class="btn btn-outline-info waves-effect waves-light">Click to Explore</button>
                                                    </div>
                                                    <div class="col-3"></div>
                                                </div> 
                                                {/* <!-- end row --> */}
                                                
                                            </div>
                                        </div>
                                         {/* <!-- collapsed end --> */}
                                    </div>
                                     {/* <!-- end card-body --> */}
                                </div> 
                                {/* <!-- end card--> */}
                            </div>
                             {/* <!-- end col-->

                            <!-- end col--> */}
                        </div>
                        {/* <!-- end row --> */}

                        <div class="row">
                           

                            <div class="col-xl-12">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="card-widgets">
                                            <a href="/" data-toggle="reload"><i class="mdi mdi-refresh"></i></a>
                                            <a data-toggle="collapse" href="#cardCollpase5" role="button" aria-expanded="false" aria-controls="cardCollpase5"><i class="mdi mdi-minus"></i></a>
                                            <a href="/" data-toggle="remove"><i class="mdi mdi-close"></i></a>
                                        </div>
                                        <h4 class="header-title mb-0">Planet Transition Snapshot</h4>

                                        <div id="cardCollpase5" class="collapse pt-3 show">
                                            <div class="table-responsive">
                                                <table class="table table-hover table-centered mb-0">
                                                    <thead>
                                                        <tr>
                                                            <th>Product Name</th>
                                                            <th>Price</th>
                                                            <th>Quantity</th>
                                                            <th>Amount</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>ASOS Ridley High Waist</td>
                                                            <td>$79.49</td>
                                                            <td>82</td>
                                                            <td>$6,518.18</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Marco Lightweight Shirt</td>
                                                            <td>$128.50</td>
                                                            <td>37</td>
                                                            <td>$4,754.50</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Half Sleeve Shirt</td>
                                                            <td>$39.99</td>
                                                            <td>64</td>
                                                            <td>$2,559.36</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Lightweight Jacket</td>
                                                            <td>$20.00</td>
                                                            <td>184</td>
                                                            <td>$3,680.00</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Marco Shoes</td>
                                                            <td>$28.49</td>
                                                            <td>69</td>
                                                            <td>$1,965.81</td>
                                                        </tr>
                                                        <tr>
                                                            <td>ASOS Ridley High Waist</td>
                                                            <td>$79.49</td>
                                                            <td>82</td>
                                                            <td>$6,518.18</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Half Sleeve Shirt</td>
                                                            <td>$39.99</td>
                                                            <td>64</td>
                                                            <td>$2,559.36</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Lightweight Jacket</td>
                                                            <td>$20.00</td>
                                                            <td>184</td>
                                                            <td>$3,680.00</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div> 
                                            {/* <!-- end table responsive--> */}
                                        </div> 
                                        {/* <!-- collapsed end --> */}
                                    </div> 
                                    {/* <!-- end card-body --> */}
                                </div>
                                 {/* <!-- end card--> */}
                            </div> 
                            {/* <!-- end col --> */}
                        </div>
                        {/* <!-- end row --> */}

                    </div> 
                    {/* <!-- container --> */}

                </div> 
                {/* <!-- content --> */}

                {/* <!-- Footer Start --> */}
                <footer class="footer">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-6">
                                2020 - {new Date().getFullYear()} Omparashar <a href="/">Semanticbits</a> 
                            </div>
                            <div class="col-md-6">
                                <div class="text-md-right footer-links d-none d-sm-block">
                                    <a href="/">About Us</a>
                                    <a href="/">Help</a>
                                    <a href="/">Contact Us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                {/* <!-- end Footer --> */}

            </div>

     </>

      );
  };





export default Dashboard;
