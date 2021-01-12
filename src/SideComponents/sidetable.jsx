import React from 'react';
import { GlobalContext } from '../mycontext';


const Sidetable = (props) => {
    const context = React.useContext(GlobalContext);
    var date = context.apidataState.date;
    var planet_data_degree = [];
    planet_data_degree = context.apidataState.planets;
    console.log("super-" + planet_data_degree);
    return (
        <>
            <div className="">
                <div className="card">
                    <div className="card-body">

                        <h4 className="header-title">Planet positions </h4>
                        <div className="sub-heading"> Date : <span style={{ "fontSize": "14px" }} className="badge badge-pill badge-dark"> {date} </span></div>
                      At 12:00 AM @ {context.placeobserved}<br/>
                        <table className="table table-sm table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">Planet</th>
                                    <th scope="col">Degrees</th>

                                </tr>
                            </thead>

                            {
                                planet_data_degree && planet_data_degree.length > 0
                                    ? planet_data_degree.map(item => {
                                        return (
                                            <>
                                                <tr key={item.name}>
                                                    <td style={{"width":"50px"}}>{item.name}</td>
                                        <td>{item.deg}&#176; <b>{ (item.motion === 'D')? '': 'R'}</b></td>

                                                </tr>



                                            </>
                                        );
                                    })
                                    : "Loading..."


                            }



                        </table>




                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidetable;


