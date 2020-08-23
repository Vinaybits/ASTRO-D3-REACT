import React from 'react';

const sideform = () => {
    return (
        <>
            <div className="col-lg-3">
                <div className="card">
                    <div className="card-body">

                        <h4 className="header-title">Input Sizes</h4>
                        <p className="sub-header">
                            Set heights using classNamees like <code>.input-lg</code>, and set widths using grid column classNamees like <code>.col-lg-*</code>.
                                                    </p>

                        <form>
                            <div className="form-group mb-3">
                                <label for="example-input-small">Small</label>
                                <input type="text" id="example-input-small" name="example-input-small" className="form-control form-control-sm" placeholder=".input-sm" />
                            </div>

                            <div className="form-group mb-3">
                                <label for="example-input-normal">Normal</label>
                                <input type="text" id="example-input-normal" name="example-input-normal" className="form-control" placeholder="Normal" />
                            </div>

                            <div className="form-group mb-3">
                                <label for="example-input-large">Large</label>
                                <input type="text" id="example-input-large" name="example-input-large" className="form-control form-control-lg" placeholder=".input-lg" />
                            </div>

                            <div className="form-group mb-2">
                                <label for="example-gridsize">Grid Sizes</label>
                                <div className="row">
                                    <div className="col-sm-4">
                                        <input type="text" id="example-gridsize" className="form-control" placeholder=".col-sm-4" />
                                    </div>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>



        </>
    );
};

export default sideform;