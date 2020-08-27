import React from 'react';

const sideform = () => {
    return (
        <>
            <div className="col-lg-3">
                <div className="card">
                    <div className="card-body">

                        <h4 className="header-title">Input Sizes</h4>
                        <p class="sub-header">
                                                        Detail text goes here  
                                                        <code> hello world </code>
                                                        description of what todo
                                                    </p>

                        <form>
                            <div className="form-group mb-3">
                                <label for="example-input-small">Name</label>
                                <input type="text" id="example-input-small" name="example-input-small" className="form-control form-control-sm" 
                                placeholder="write your full name" />
                            </div>
                            <div className="form-group mb-3">
                                <label for="example-input-small">D.O.B</label>
                                <input type="text" id="example-input-small" name="example-input-small" className="form-control form-control-sm" 
                                placeholder="select your date of birth" />
                            </div>
                            <div className="form-group mb-3">
                                <label for="example-input-small">Place of Birth</label>
                                <input type="text" id="example-input-small" name="example-input-small" className="form-control form-control-sm" 
                                placeholder="place of birth" />
                            </div>
                            <div className="form-group mb-3">
                                <label for="example-input-small">Time of Birth</label>
                                <input type="text" id="example-input-small" name="example-input-small" className="form-control form-control-sm" 
                                placeholder="time of birth" />
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