import React from "react";
import 'react-bootstrap';

const DashboardFooter= () => {
    return(
        <>
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
        </>
    );
}

export default DashboardFooter