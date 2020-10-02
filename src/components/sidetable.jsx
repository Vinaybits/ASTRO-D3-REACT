import React from 'react';
import { GlobalProvider, GlobalContext } from '../mycontext';


const Sidetable = () => {
    const context = React.useContext(GlobalContext);
    var date = context.apidataState.date;
    var planet_data_degree = [];
    planet_data_degree = context.apidataState.planets;
    console.log("super-" + planet_data_degree);
    return (
        <>
            <div className="col-lg-2">
                <div className="card">
                    <div className="card-body">

                        <h4 className="header-title">Planet position </h4>
                        <div className="sub-heading"> Date : <span style={{ "fontSize": "14px" }} className="badge badge-pill badge-dark"> {date} </span></div>
                       <br></br>
                        <table className="table table-sm table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">Planet</th>
                                    <th scope="col">Degree</th>

                                </tr>
                            </thead>

                            {
                                planet_data_degree && planet_data_degree.length > 0
                                    ? planet_data_degree.map(item => {
                                        return (
                                            <>
                                                <tr key={item.name}>
                                                    <td style={{"width":"50px"}}>{item.name}</td>
                                        <td>{item.deg}&#176;{item.motion}</td>

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


