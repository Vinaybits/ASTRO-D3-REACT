import React from 'react';

const Topbar = () => {
    return (
        <>

            <div className="navbar-custom">
                <div className="container-fluid">
                <a class="navbar-brand" href="#">
          <img src="http://placehold.it/150x50?text=Logo" alt="" />
        </a>
                    <ul className="list-unstyled topnav-menu float-right mb-0">





                        <li className="dropdown d-none d-lg-inline-block">
                            <a className="nav-link dropdown-toggle arrow-none waves-effect waves-light" data-toggle="fullscreen" href="#">
                                <i className="fe-maximize noti-icon"></i>
                            </a>
                        </li>
                        <li>


                            <div className="custom-control custom-switch mb-1 mt-2 ml-2">
                                <input type="radio" className="custom-control-input" name="color-scheme-mode" value="light"
                                    id="light-mode-check" checked />
                                <label className="custom-control-label" for="light-mode-check">Light Mode</label>
                            </div>

                            <div className="custom-control custom-switch mb-1 ml-2">
                                <input type="radio" className="custom-control-input" name="color-scheme-mode" value="dark"
                                    id="dark-mode-check" />
                                <label className="custom-control-label" for="dark-mode-check">Dark Mode</label>
                            </div>
                        </li>

{/* 
                        <li className="dropdown notification-list topbar-dropdown">
                            <a className="nav-link dropdown-toggle nav-user mr-0 waves-effect waves-light" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                <img src="../assets/images/users/user-1.jpg" alt="user-image" className="rounded-circle" />
                                <span className="pro-user-name ml-1">
                                    Geneva <i className="mdi mdi-chevron-down"></i>
                                </span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right profile-dropdown ">

                                <div className="dropdown-header noti-title">
                                    <h6 className="text-overflow m-0">Welcome !</h6>
                                </div>


                                <a href="javascript:void(0);" className="dropdown-item notify-item">
                                    <i className="fe-user"></i>
                                    <span>My Account</span>
                                </a>


                                <a href="javascript:void(0);" className="dropdown-item notify-item">
                                    <i className="fe-settings"></i>
                                    <span>Settings</span>
                                </a>


                                <a href="javascript:void(0);" className="dropdown-item notify-item">
                                    <i className="fe-lock"></i>
                                    <span>Lock Screen</span>
                                </a>

                                <div className="dropdown-divider"></div>


                                <a href="javascript:void(0);" className="dropdown-item notify-item">
                                    <i className="fe-log-out"></i>
                                    <span>Logout</span>
                                </a>

                            </div>
                        </li>

                        <li className="dropdown notification-list">
                            <a href="javascript:void(0);" className="nav-link right-bar-toggle waves-effect waves-light">
                                <i className="fe-settings noti-icon"></i>
                            </a>
                        </li> */}

                    </ul>




                    <div className="clearfix"></div>
                </div>
            </div>
       
        </>
    );
};

export default Topbar;