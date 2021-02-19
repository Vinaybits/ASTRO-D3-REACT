import React from "react";
import 'react-bootstrap';

const DashboardFooter= () => {
    return(
        <>
                {/* <!-- Footer Start --> */}
                <footer className="footer">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6">
                            <div className="text-md-left">
                                2020 - {new Date().getFullYear()} Omparashar <a href="/">Semanticbits</a> 
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="text-md-right footer-links d-none d-sm-block">
                                    <a href="/">About Us</a>
                                    <a href="/">Help</a>
                                    <a href="/">Contact Us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                {/* <!-- end Footer --> */}
        </>
    );
}

export default DashboardFooter