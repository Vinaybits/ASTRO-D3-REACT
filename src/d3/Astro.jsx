
import React, { Component} from 'react';


class Astro extends Component {
     constructor(props){
      super(props);
      this.myRef = React.createRef();
      
   }
   componentWillMount() {
        this.createChart();
   }

   a


   createChart() {

    var options = {
        'title': ['Rasi', '11/04/2014 07:00AM', 'Erode, Tamil Nadu, India'],
            'width': 600,
            'height': 400
};

var astroChart = ""
console.log(astroChart)
astroChart.draw({
    1: ["Su", "Ke"],
    3: ["Ju"],
    6: ["Ma", "Asc"],
    7: ["Mo", "Sa", "Ra"],
    11: ["Ve"],
    12: ["Me"]
}, options);

}

  
    render() {
        const { selectedOption} = this.state;
        return <>
                <div className={this.state.currentClass}>
                <div id="d3graph" className="col-lg-12"  >
                    <div className="card">

                        <div className="card-body" style={{ "padding": "10px" }}>
                            {/* <div class="card-widgets">
                                <a class="nav-link dropdown-toggle arrow-none waves-effect waves-light"
                                    data-toggle="fullscreen" href="/#">
                                    <i class="fe-maximize noti-icon"></i></a>
                            </div> */}
         <div id="events" ref={this.myRef} ></div>
         <svg id="chart"></svg>
        </div>
                    </div>
             
                {/* <Ploty_1 /> */}
                </div>
            </div>
        </>
    }
}


export default Astro;