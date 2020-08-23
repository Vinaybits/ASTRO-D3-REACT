import React from 'react';

const Navbar =() =>{
    return(
        <>
         <div className="topnav shadow-lg">
                <div className="container-fluid">
                    <nav className="navbar navbar-light navbar-expand-lg topnav-menu">

                        <div className="collapse navbar-collapse" id="topnav-menu-content">
                            <ul className="navbar-nav">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle arrow-none" href="#" id="topnav-dashboard" role="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fe-airplay mr-1"></i> Dashboards <div className="arrow-down"></div>
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="topnav-dashboard">
                                        <a href="index.html" className="dropdown-item">Dashboard 1</a>
                                        <a href="dashboard-2.html" className="dropdown-item">Dashboard 2</a>
                                        <a href="dashboard-3.html" className="dropdown-item">Dashboard 3</a>
                                        <a href="dashboard-4.html" className="dropdown-item">Dashboard 4</a>
                                    </div>
                                </li>

                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle arrow-none" href="#" id="topnav-apps" role="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fe-grid mr-1"></i> Apps <div className="arrow-down"></div>
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="topnav-apps">

                                        <a href="apps-calendar.html" className="dropdown-item"><i className="fe-calendar mr-1"></i> Calendar</a>
                                        <a href="apps-chat.html" className="dropdown-item"><i className="fe-message-square mr-1"></i> Chat</a>
                                        <div className="dropdown">
                                            <a className="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-ecommerce"
                                                role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i className="fe-shopping-cart mr-1"></i> Ecommerce <div className="arrow-down"></div>
                                            </a>
                                            <div className="dropdown-menu" aria-labelledby="topnav-ecommerce">
                                                <a href="ecommerce-dashboard.html" className="dropdown-item">Dashboard</a>
                                                <a href="ecommerce-products.html" className="dropdown-item">Products</a>
                                                <a href="ecommerce-product-detail.html" className="dropdown-item">Product Detail</a>
                                                <a href="ecommerce-product-edit.html" className="dropdown-item">Add Product</a>
                                                <a href="ecommerce-customers.html" className="dropdown-item">Customers</a>
                                                <a href="ecommerce-orders.html" className="dropdown-item">Orders</a>
                                                <a href="ecommerce-order-detail.html" className="dropdown-item">Order Detail</a>
                                                <a href="ecommerce-sellers.html" className="dropdown-item">Sellers</a>
                                                <a href="ecommerce-cart.html" className="dropdown-item">Shopping Cart</a>
                                                <a href="ecommerce-checkout.html" className="dropdown-item">Checkout</a>
                                            </div>
                                        </div>
                                        <div className="dropdown">
                                            <a className="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-email"
                                                role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i className="fe-mail mr-1"></i> Email <div className="arrow-down"></div>
                                            </a>
                                            <div className="dropdown-menu" aria-labelledby="topnav-email">
                                                <a href="email-inbox.html" className="dropdown-item">Inbox</a>
                                                <a href="email-read.html" className="dropdown-item">Read Email</a>
                                                <a href="email-compose.html" className="dropdown-item">Compose Email</a>
                                                <a href="email-templates.html" className="dropdown-item">Email Templates</a>
                                            </div>
                                        </div>

                                        <div className="dropdown">
                                            <a className="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-crm"
                                                role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i className="fe-users mr-1"></i> CRM <div className="arrow-down"></div>
                                            </a>
                                            <div className="dropdown-menu" aria-labelledby="topnav-crm">
                                                <a href="crm-dashboard.html" className="dropdown-item">Dashboard</a>
                                                <a href="crm-contacts.html" className="dropdown-item">Contacts</a>
                                                <a href="crm-opportunities.html" className="dropdown-item">Opportunities</a>
                                                <a href="crm-leads.html" className="dropdown-item">Leads</a>
                                                <a href="crm-customers.html" className="dropdown-item">Customers</a>
                                            </div>
                                        </div>

                                        <a href="apps-social-feed.html" className="dropdown-item"><i className="fe-rss mr-1"></i> Social Feed</a>
                                        <a href="apps-companies.html" className="dropdown-item"><i className="fe-activity mr-1"></i> Companies</a>

                                        <div className="dropdown">
                                            <a className="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-project"
                                                role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i className="fe-briefcase mr-1"></i> Projects <div className="arrow-down"></div>
                                            </a>
                                            <div className="dropdown-menu" aria-labelledby="topnav-project">
                                                <a href="project-list.html" className="dropdown-item">List</a>
                                                <a href="project-detail.html" className="dropdown-item">Detail</a>
                                                <a href="project-create.html" className="dropdown-item">Create Project</a>
                                            </div>
                                        </div>
                                        <div className="dropdown">
                                            <a className="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-task"
                                                role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i className="fe-clipboard mr-1"></i> Tasks <div className="arrow-down"></div>
                                            </a>
                                            <div className="dropdown-menu" aria-labelledby="topnav-task">
                                                <a href="task-list.html" className="dropdown-item">List</a>
                                                <a href="task-details.html" className="dropdown-item">Details</a>
                                                <a href="task-kanban-board.html" className="dropdown-item">Kanban Board</a>
                                            </div>
                                        </div>
                                        <div className="dropdown">
                                            <a className="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-contact"
                                                role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i className="fe-book mr-1"></i> Contacts <div className="arrow-down"></div>
                                            </a>
                                            <div className="dropdown-menu" aria-labelledby="topnav-contact">
                                                <a href="contacts-list.html" className="dropdown-item">Members List</a>
                                                <a href="contacts-profile.html" className="dropdown-item">Profile</a>
                                            </div>
                                        </div>
                                        <div className="dropdown">
                                            <a className="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-tickets"
                                                role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i className="fe-aperture mr-1"></i> Tickets <div className="arrow-down"></div>
                                            </a>
                                            <div className="dropdown-menu" aria-labelledby="topnav-tickets">
                                                <a href="tickets-list.html" className="dropdown-item">List</a>
                                                <a href="tickets-detail.html" className="dropdown-item">Detail</a>
                                            </div>
                                        </div>
                                        <a href="apps-file-manager.html" className="dropdown-item"><i className="fe-folder-plus mr-1"></i> File Manager</a>
                                    </div>
                                </li>

                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle arrow-none" href="#" id="topnav-ui" role="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fe-briefcase mr-1"></i> UI Elements <div className="arrow-down"></div>
                                    </a>

                                    <div className="dropdown-menu mega-dropdown-menu dropdown-mega-menu-xl" aria-labelledby="topnav-ui">
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <div>
                                                    <a href="ui-buttons.html" className="dropdown-item">Buttons</a>
                                                    <a href="ui-cards.html" className="dropdown-item">Cards</a>
                                                    <a href="ui-avatars.html" className="dropdown-item">Avatars</a>
                                                    <a href="ui-portlets.html" className="dropdown-item">Portlets</a>
                                                    <a href="ui-tabs-accordions.html" className="dropdown-item">Tabs & Accordions</a>
                                                    <a href="ui-modals.html" className="dropdown-item">Modals</a>
                                                    <a href="ui-progress.html" className="dropdown-item">Progress</a>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div>
                                                    <a href="ui-notifications.html" className="dropdown-item">Notifications</a>
                                                    <a href="ui-spinners.html" className="dropdown-item">Spinners</a>
                                                    <a href="ui-images.html" className="dropdown-item">Images</a>
                                                    <a href="ui-carousel.html" className="dropdown-item">Carousel</a>
                                                    <a href="ui-list-group.html" className="dropdown-item">List Group</a>
                                                    <a href="ui-video.html" className="dropdown-item">Embed Video</a>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div>
                                                    <a href="ui-dropdowns.html" className="dropdown-item">Dropdowns</a>
                                                    <a href="ui-ribbons.html" className="dropdown-item">Ribbons</a>
                                                    <a href="ui-tooltips-popovers.html" className="dropdown-item">Tooltips & Popovers</a>
                                                    <a href="ui-general.html" className="dropdown-item">General UI</a>
                                                    <a href="ui-typography.html" className="dropdown-item">Typography</a>
                                                    <a href="ui-grid.html" className="dropdown-item">Grid</a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </li>

                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle arrow-none" href="#" id="topnav-components" role="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fe-layers mr-1"></i> Components <div className="arrow-down"></div>
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="topnav-components">
                                        <div className="dropdown">
                                            <a className="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-extendedui"
                                                role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i className="fe-pocket mr-1"></i> Extended UI <div className="arrow-down"></div>
                                            </a>
                                            <div className="dropdown-menu" aria-labelledby="topnav-extendedui">
                                                <a href="extended-nestable.html" className="dropdown-item">Nestable List</a>
                                                <a href="extended-range-slider.html" className="dropdown-item">Range Slider</a>
                                                <a href="extended-dragula.html" className="dropdown-item">Dragula</a>
                                                <a href="extended-animation.html" className="dropdown-item">Animation</a>
                                                <a href="extended-sweet-alert.html" className="dropdown-item">Sweet Alert</a>
                                                <a href="extended-tour.html" className="dropdown-item">Tour Page</a>
                                                <a href="extended-scrollspy.html" className="dropdown-item">Scrollspy</a>
                                                <a href="extended-loading-buttons.html" className="dropdown-item">Loading Buttons</a>
                                            </div>
                                        </div>
                                        <a href="widgets.html" className="dropdown-item"><i className="fe-gift mr-1"></i> Widgets</a>
                                        <div className="dropdown">
                                            <a className="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-form"
                                                role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i className="fe-bookmark mr-1"></i> Forms <div className="arrow-down"></div>
                                            </a>
                                            <div className="dropdown-menu" aria-labelledby="topnav-form">
                                                <a href="forms-elements.html" className="dropdown-item">General Elements</a>
                                                <a href="forms-advanced.html" className="dropdown-item">Advanced</a>
                                                <a href="forms-validation.html" className="dropdown-item">Validation</a>
                                                <a href="forms-pickers.html" className="dropdown-item">Pickers</a>
                                                <a href="forms-wizard.html" className="dropdown-item">Wizard</a>
                                                <a href="forms-masks.html" className="dropdown-item">Masks</a>
                                                <a href="forms-summernote.html" className="dropdown-item">Summernote</a>
                                                <a href="forms-quilljs.html" className="dropdown-item">Quilljs Editor</a>
                                                <a href="forms-file-uploads.html" className="dropdown-item">File Uploads</a>
                                                <a href="forms-x-editable.html" className="dropdown-item">X Editable</a>
                                                <a href="forms-image-crop.html" className="dropdown-item">Image Crop</a>
                                            </div>
                                        </div>
                                        <div className="dropdown">
                                            <a className="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-charts"
                                                role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i className="fe-bar-chart-2 mr-1"></i> Charts <div className="arrow-down"></div>
                                            </a>
                                            <div className="dropdown-menu" aria-labelledby="topnav-charts">
                                                <a href="charts-apex.html" className="dropdown-item">Apex Charts</a>
                                                <a href="charts-flot.html" className="dropdown-item">Flot Charts</a>
                                                <a href="charts-morris.html" className="dropdown-item">Morris Charts</a>
                                                <a href="charts-chartjs.html" className="dropdown-item">Chartjs Charts</a>
                                                <a href="charts-peity.html" className="dropdown-item">Peity Charts</a>
                                                <a href="charts-chartist.html" className="dropdown-item">Chartist Charts</a>
                                                <a href="charts-c3.html" className="dropdown-item">C3 Charts</a>
                                                <a href="charts-sparklines.html" className="dropdown-item">Sparklines Charts</a>
                                                <a href="charts-knob.html" className="dropdown-item">Jquery Knob Charts</a>
                                            </div>
                                        </div>
                                        <div className="dropdown">
                                            <a className="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-table"
                                                role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i className="fe-grid mr-1"></i> Tables <div className="arrow-down"></div>
                                            </a>
                                            <div className="dropdown-menu" aria-labelledby="topnav-table">
                                                <a href="tables-basic.html" className="dropdown-item">Basic Tables</a>
                                                <a href="tables-datatables.html" className="dropdown-item">Data Tables</a>
                                                <a href="tables-editable.html" className="dropdown-item">Editable Tables</a>
                                                <a href="tables-responsive.html" className="dropdown-item">Responsive Tables</a>
                                                <a href="tables-footables.html" className="dropdown-item">FooTable</a>
                                                <a href="tables-bootstrap.html" className="dropdown-item">Bootstrap Tables</a>
                                                <a href="tables-tablesaw.html" className="dropdown-item">Tablesaw Tables</a>
                                                <a href="tables-jsgrid.html" className="dropdown-item">JsGrid Tables</a>
                                            </div>
                                        </div>
                                        <div className="dropdown">
                                            <a className="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-icons"
                                                role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i className="fe-cpu mr-1"></i> Icons <div className="arrow-down"></div>
                                            </a>
                                            <div className="dropdown-menu" aria-labelledby="topnav-icons">
                                                <a href="icons-two-tone.html" className="dropdown-item">Two Tone Icons</a>
                                                <a href="icons-feather.html" className="dropdown-item">Feather Icons</a>
                                                <a href="icons-mdi.html" className="dropdown-item">Material Design Icons</a>
                                                <a href="icons-dripicons.html" className="dropdown-item">Dripicons</a>
                                                <a href="icons-font-awesome.html" className="dropdown-item">Font Awesome 5</a>
                                                <a href="icons-themify.html" className="dropdown-item">Themify</a>
                                                <a href="icons-simple-line.html" className="dropdown-item">Simple Line</a>
                                                <a href="icons-weather.html" className="dropdown-item">Weather</a>
                                            </div>
                                        </div>
                                        <div className="dropdown">
                                            <a className="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-map"
                                                role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i className="fe-map mr-1"></i> Maps <div className="arrow-down"></div>
                                            </a>
                                            <div className="dropdown-menu" aria-labelledby="topnav-map">
                                                <a href="maps-google.html" className="dropdown-item">Google Maps</a>
                                                <a href="maps-vector.html" className="dropdown-item">Vector Maps</a>
                                                <a href="maps-mapael.html" className="dropdown-item">Mapael Maps</a>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle arrow-none" href="#" id="topnav-pages" role="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fe-package mr-1"></i> Pages <div className="arrow-down"></div>
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="topnav-pages">
                                        <div className="dropdown">
                                            <a className="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-auth"
                                                role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Auth Style 1 <div className="arrow-down"></div>
                                            </a>
                                            <div className="dropdown-menu" aria-labelledby="topnav-auth">
                                                <a href="auth-login.html" className="dropdown-item">Log In</a>
                                                <a href="auth-register.html" className="dropdown-item">Register</a>
                                                <a href="auth-signin-signup.html" className="dropdown-item">Signin - Signup</a>
                                                <a href="auth-recoverpw.html" className="dropdown-item">Recover Password</a>
                                                <a href="auth-lock-screen.html" className="dropdown-item">Lock Screen</a>
                                                <a href="auth-logout.html" className="dropdown-item">Logout</a>
                                                <a href="auth-confirm-mail.html" className="dropdown-item">Confirm Mail</a>
                                            </div>
                                        </div>

                                        <div className="dropdown">
                                            <a className="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-auth2"
                                                role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Auth Style 2 <div className="arrow-down"></div>
                                            </a>
                                            <div className="dropdown-menu" aria-labelledby="topnav-auth2">
                                                <a href="auth-login-2.html" className="dropdown-item">Log In 2</a>
                                                <a href="auth-register-2.html" className="dropdown-item">Register 2</a>
                                                <a href="auth-signin-signup-2.html" className="dropdown-item">Signin - Signup 2</a>
                                                <a href="auth-recoverpw-2.html" className="dropdown-item">Recover Password 2</a>
                                                <a href="auth-lock-screen-2.html" className="dropdown-item">Lock Screen 2</a>
                                                <a href="auth-logout-2.html" className="dropdown-item">Logout 2</a>
                                                <a href="auth-confirm-mail-2.html" className="dropdown-item">Confirm Mail 2</a>
                                            </div>
                                        </div>

                                        <div className="dropdown">
                                            <a className="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-error"
                                                role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Errors <div className="arrow-down"></div>
                                            </a>
                                            <div className="dropdown-menu" aria-labelledby="topnav-error">
                                                <a href="pages-404.html" className="dropdown-item">Error 404</a>
                                                <a href="pages-404-two.html" className="dropdown-item">Error 404 Two</a>
                                                <a href="pages-404-alt.html" className="dropdown-item">Error 404-alt</a>
                                                <a href="pages-500.html" className="dropdown-item">Error 500</a>
                                                <a href="pages-500-two.html" className="dropdown-item">Error 500 Two</a>
                                            </div>
                                        </div>

                                        <div className="dropdown">
                                            <a className="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-utility"
                                                role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Utility <div className="arrow-down"></div>
                                            </a>
                                            <div className="dropdown-menu" aria-labelledby="topnav-utility">
                                                <a href="pages-starter.html" className="dropdown-item">Starter</a>
                                                <a href="pages-timeline.html" className="dropdown-item">Timeline</a>
                                                <a href="pages-sitemap.html" className="dropdown-item">Sitemap</a>
                                                <a href="pages-invoice.html" className="dropdown-item">Invoice</a>
                                                <a href="pages-faqs.html" className="dropdown-item">FAQs</a>
                                                <a href="pages-search-results.html" className="dropdown-item">Search Results</a>
                                                <a href="pages-pricing.html" className="dropdown-item">Pricing</a>
                                                <a href="pages-maintenance.html" className="dropdown-item">Maintenance</a>
                                                <a href="pages-coming-soon.html" className="dropdown-item">Coming Soon</a>
                                                <a href="pages-gallery.html" className="dropdown-item">Gallery</a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle arrow-none" href="#" id="topnav-layout" role="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fe-sidebar mr-1"></i> Layouts <div className="arrow-down"></div>
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="topnav-layout">
                                        <a href="layouts-vertical.html" className="dropdown-item">Vertical</a>
                                        <a href="layouts-detached.html" className="dropdown-item">Detached</a>
                                        <a href="layouts-two-column.html" className="dropdown-item">Two Column Menu</a>
                                        <a href="layouts-two-tone-icons.html" className="dropdown-item">Two Tones Icons</a>
                                        <a href="layouts-preloader.html" className="dropdown-item">Preloader</a>
                                    </div>
                                </li>
                            </ul> 
                        </div> 
                    </nav>
                </div> 
            </div> 

        </>

    );
};

export default Navbar;