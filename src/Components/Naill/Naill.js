import React from 'react';






const Naill = () => {


    return (

        <div className="my-5 " style={{ fontFamily: "Besley" }}>



            <div class="container my-5 py-5 ">
                <div class="row">
                    <div className="row">


                        <div className="col-lg-4 col-md-12 col-sm-12">
                            <div className="ms-5 mt-3 ps-5">
                                <img
                                    className="img-fluid"
                                    style={{ objectFit: "cover", height: "550px" }}
                                    src="https://st.depositphotos.com/1491329/2998/i/950/depositphotos_29984207-stock-photo-fashion-beauty-manicure-and-make.jpg"
                                    class="d-block w-100  se1"
                                    alt="..."
                                />
                            </div>

                        </div>




                        <div className="col-lg-6 col-md-12 col-sm-12 text-center">

                            <div className="m-4">



                                <div className="m-3">
                                    <h1 style={{ fontFamily: "Besley", color: "#0207a8" }}>
                                    Contact Our Salon
                                    <hr />
                                    </h1>
                                    <h5 style={{ fontFamily: "Besley", color: "deepPink" }}>
                                    *Or Give Us a Call To Schedule a Treatment (888)265-0000*
                                    </h5>


                                </div>
                            </div>


                            <form action="/action">
                                <div class="form-group">
                                    <label for="name">Full Name * </label>
                                    <input type="name" class="form-control" id="name" placeholder="Full Name" name="name" />
                                </div>
                                <div class="form-group">
                                    <label for="appointment">Appointment Date * </label>
                                    <input type="appointment" class="form-control" id="appointment" placeholder="Enter Appointment" name="appointment" />
                                </div>
                                <div class="form-group">
                                    <label for="number">Phone Number * </label>
                                    <input type="number" class="form-control" id="number" placeholder="Enter Phone Number" name="number" />
                                </div>
                                <div class="form-group">
                                    <label for="email">Email * </label>
                                    <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" />
                                </div>
                                <div class="form-group">
                                    <label for="pwd">Password * </label>
                                    <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd" />
                                </div>

                                <div>
                                    <button type="submit" class="btn btn-primary mt-2">Send</button>
                                </div>
                            </form>




                        </div>




                    </div>





                    <h1 className="text-center mb-4 pb-4 mt-5 " style={{ color: "#303f9f" }}>
                        <br />
                        Mix & Match Mani
                    </h1>
                    <p style={{ color: "#555555" }}>
                        But black nail polish is actually associated with positive personality traits.Wearing black is a way of rebelling against the norm and showing off a daring aspect of your personality," she explained.
                    </p>

                    <div class="col">
                        <img
                            style={{ height: "280px", width: "230px", objectFit: "cover" }}
                            src="https://m.media-amazon.com/images/I/717XUT1sZQL._SY355_.jpg"
                            alt=""
                        />
                        <div className="ms-5 ps-2 mt-3">
                            <h6 className="" style={{ color: "#555555" }}>
                                Base Coat
                            </h6>
                            <h6 style={{ color: "#555555" }}>
                                Film shadow / No.5 oz
                            </h6>


                        </div>
                    </div>
                    <div class="col">
                        <img
                            style={{ height: "260px", width: "230px", objectFit: "cover" }}
                            src="https://i.ebayimg.com/images/g/acIAAOSwEm5fK8Zm/s-l1600.jpg"
                            alt=""
                        />
                        <div className="ms-5 ps-2 mt-3">
                            <h6 className="" style={{ color: "#555555" }}>

                                Gel Polish
                            </h6>
                            <h6 style={{ color: "#555555" }}>
                                Sorbet fine / No.5 oz
                            </h6>


                        </div>
                    </div>

                    <div class="col">
                        <img
                            style={{ height: "260px", width: "230px", objectFit: "cover" }}
                            src="https://www.londondrugs.com/on/demandware.static/-/Sites-londondrugs-master/default/dw2682d6e7/products/L8344293/large/L8344293.JPG"
                            alt=""
                        />
                        <div className="ms-5 ps-2 mt-3">
                            <h6 className="" style={{ color: "#555555" }}>
                                Top Coat
                            </h6>
                            <h6 style={{ color: "#555555" }}>
                            Red Sorbet/ No.5 oz
                            </h6>


                        </div>
                    </div>

                    <div class="col">
                        <img
                            style={{ height: "260px", width: "230px", objectFit: "cover" }}
                            src="https://m.media-amazon.com/images/I/31xiSP3pQkS.jpg"
                            alt=""
                        />
                        <div className="ms-5 ps-2 mt-3">
                            <h6 className="" style={{ color: "#555555" }}>
                                Matte Polish
                            </h6>
                            <h6 style={{ color: "#555555" }}>
                                Blue Paletts / No.5 oz

                            </h6>


                        </div>
                    </div>







                </div>
            </div>


        </div>

    );

};

export default Naill;