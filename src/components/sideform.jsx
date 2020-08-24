import React from 'react';

const sideform = () => {
    return (
        <>
            <div className="col-lg-3">
                <div className="card">
                    <div className="card-body">

                        <h4 className="header-title">Input Sizes</h4>
                       

                        <form>
                            <div className="form-group mb-3">
                                <label for="example-input-small">Name</label>
                                <input type="text" id="example-input-small" name="example-input-small" className="form-control form-control-sm" placeholder=".input-sm" />
                            </div>
                            <div className="form-group mb-3">
                                <label for="example-input-small">D.O.B</label>
                                <input type="text" id="example-input-small" name="example-input-small" className="form-control form-control-sm" placeholder=".input-sm" />
                            </div>
                            <div className="form-group mb-3">
                                <label for="example-input-small">Place of Birth</label>
                                <input type="text" id="example-input-small" name="example-input-small" className="form-control form-control-sm" placeholder=".input-sm" />
                            </div>
                            <div className="form-group mb-3">
                                <label for="example-input-small">Time of Birth</label>
                                <input type="text" id="example-input-small" name="example-input-small" className="form-control form-control-sm" placeholder=".input-sm" />
                            </div>
                            <button type="submit" className="ladda-button btn btn-primary" >
                               Submit
                            </button>
                           

                           
                            
                        </form>

                    </div>
                </div>
            </div>



        </>
    );
};

export default sideform;