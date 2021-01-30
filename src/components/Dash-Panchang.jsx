import React from "react";
import "./dash-panchang.css";

const Dash_Panchang = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  function scrollFunction() {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      // document.getElementById("navbar").style.padding = "30px 10px";
      // document.getElementById("logo").style.fontSize = "25px";
    } else {
      //document.getElementById("navbar").style.padding = "80px 10px";
      //document.getElementById("logo").style.fontSize = "35px";
      //alert("2");
    }
  }
  window.onscroll = function () {
    scrollFunction();
  };

  return (
    <>
      <div class="content-page">
        <div class="content">
          {/* <!-- Start Content--> */}
          <div class="container-fluid">
            {/* <!-- start page title --> */}
            <div class="row">
              <div class="col-12">
                <div class="page-title-box">
                  <div class="page-title-right">
                    <ol class="breadcrumb m-0">
                      <li class="breadcrumb-item">
                        <a href="/">Omparashar</a>
                      </li>
                      <li class="breadcrumb-item active">Dashboard</li>
                    </ol>
                  </div>
                  <h4 class="page-title">Dashboard</h4>
                </div>
              </div>
            </div>
            {/* <!-- end page title -->  */}

            <div class="row">
              <div class="col-md-12 col-xl-12">
                <div class="card-box">
                  <div class="button-list">
                    <button
                      type="button"
                      class="btn btn-light waves-effect waves-light"
                    >
                      <i class="mdi mdi-email-outline mr-1"></i>
                      <br /> Share
                    </button>
                    <button
                      type="button"
                      class="btn btn-light waves-effect waves-light"
                    >
                      <i class="mdi mdi-email-outline mr-1"></i>
                      <br /> Share
                    </button>
                    <button
                      type="button"
                      class="btn btn-light waves-effect waves-light"
                    >
                      <i class="mdi mdi-email-outline mr-1"></i>
                      <br /> Share
                    </button>
                    <button
                      type="button"
                      class="btn btn-light waves-effect waves-light"
                    >
                      <i class="mdi mdi-email-outline mr-1"></i>
                      <br /> Share
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- end row --> */}

            <div class="row">
              <div class="col-12">
                <div class="card-box">
                  <div class="row">
                    <div class="col-sm-12 col-md-6">
                    <i style={{color:"orange"}} class="mdi mdi-map-marker mr-1"></i>
                      <span style={{ paddingRight: "5px" }}>
                        NewDelhi
                      </span>
                      <button
                        type="button"
                        class="btn btn-info btn-sm waves-effect waves-light"
                      >
                        Change
                      </button>
                    </div>
                    <div
                      class="col-sm-12 col-md-6"
                      style={{ textAlign: "right" }}
                    >
                      <div class="button-list">
                        <button
                          type="button"
                          class="btn btn-primary btn-sm waves-effect waves-light"
                        >
                          Prev Day
                        </button>
                        <button
                          type="button"
                          class="btn btn-primary btn-sm waves-effect waves-light"
                        >
                          Today
                        </button>
                        <button
                          type="button"
                          class="btn btn-primary btn-sm waves-effect waves-light"
                        >
                          Next Day
                        </button>
                      </div>
                    </div>
                  </div>

                  <div class="tablesaw-bar tablesaw-mode-stack"></div>
                  <table
                    class="tablesaw table mb-0 tablesaw-stack table-bordered"
                    id="tablesaw-802"
                  >
                    <tbody>
                      <tr class="table_head_tr" style={{ textAlign: "center" }}>
                        <th scope="col" colSpan="5">
                          Sunrise and Moonrise
                        </th>
                      </tr>
                      <tr>
                        <td class="td1">
                          <a href="#">Moon Rise</a>
                        </td>
                        <td class="td2">
                          <span>1</span>
                        </td>
                        <td class="td3">
                          <a href="#">Sun Rise</a>{" "}
                        </td>
                        <td class="td4">
                          <span>83%</span>
                        </td>
                      </tr>
                      <tr class="table_head_tr" style={{ textAlign: "center" }}>
                        <th scope="col" colSpan="5">
                          Sunrise and Moonrise
                        </th>
                      </tr>
                      <tr>
                        <td class="td1">
                          <a href="#">Moon Rise</a>
                        </td>
                        <td class="td2">
                          <span>1</span>
                        </td>
                        <td class="td3">
                          <a href="#">Sun Rise</a>{" "}
                        </td>
                        <td class="td4">
                          <span>83%</span>
                        </td>
                      </tr>

                      <tr>
                        <td class="td1">
                          <a href="#">Moon Rise</a>
                        </td>
                        <td class="td2">
                          <span>1</span>
                        </td>
                        <td class="td3">
                          <a href="#">Sun Rise</a>{" "}
                        </td>
                        <td class="td4">
                          <span>83%</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- container --> */}
        </div>
      </div>
    </>
  );
};

export default Dash_Panchang;
