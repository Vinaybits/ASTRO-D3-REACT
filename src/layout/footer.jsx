import React from 'react';

const Footer =() =>{
    return(
        <>
 
                <footer className="footer">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6">
                                2020 &copy; .... by <a href="/#">FRKLABS</a> 
                            </div>
                            <div className="col-md-6">
                                <div className="text-md-right footer-links d-none d-sm-block">
                                    {/* <a href="javascript:void(0);">About Us</a>
                                    <a href="javascript:void(0);">Help</a> */}
                                    <a href="/#">Contact Us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            
        </>
    );
};

export default Footer;