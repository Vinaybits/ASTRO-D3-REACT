import React from 'react';
import Sideform from '../components/sideform'
import D3graph from '../components/d3graph';
import Sideoptions from '../components/sideoptions';
import Card3col from '../components/card3col';

const Contentlayout = () => {
  return (
    <>
      <div className="content-page">
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">



                <div className="row">
                  <Sideform />
                  <D3graph />
                  <Sideoptions />

                </div>
                <div className="row">
                
                  <Card3col />
                  <Card3col />
                  <Card3col />
                
              </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </>

  );
};

export default Contentlayout;