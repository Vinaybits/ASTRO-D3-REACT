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
             <div className="sub-heading" style={{color:"#fff"}}> Date : <span style={{ "fontSize": "0.9em"}} className="badge badge-pill badge-dark"> {date} </span> At 12:00 AM @ {context.placeobserved} </div>
                        <table className="table table-sm table-bordered" style={{ "fontSize": "0.8em", color:"#fff", width:"70%" }} >
                            <thead>
                                <tr>
                                    <th scope="col">Planet</th>
                                     {
                                            planet_data_degree && planet_data_degree.length > 0
                                            ? planet_data_degree.map(item => {
                                        return (
                                            <>
                                                    <th scope ="col">{item.name}</th>
                                            </>
                                        );
                                    })
                                    :""
                                    }               

                                </tr>
                            </thead>

                            <tr> 
                                <th scope="row">Planet</th>
                            {
                                
                                planet_data_degree && planet_data_degree.length > 0
                                    ? planet_data_degree.map(item => {
                                        return (
                                            <>
                                        <td>{item.deg}&#176; <b>{ (item.motion === 'D')? '': 'R'}</b></td>
                                            </>
                                        );
                                    })
                                    : ""

                                
                            }
                        </tr>
                        </table>

        </>
    );
};

export default Sidetable;


