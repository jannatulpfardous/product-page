import React, { useState } from 'react';

import fakedata from '../Tool/Tool.json'

import ReactStars from "react-rating-stars-component";


const firstExample = {
    size: 30,
    value: 2.5,
    edit: false
};



const Product = () => {

    const [state1, setstate1] = useState(firstExample.value)


    return (

        <div>
            <br />
            <h1 className="text-center mt-2" style={{ color: "#0a5fa2",fontFamily: 'Besley' }}>News & Refined Trends</h1>
            <p style={{ textAlign: "center", color:"blue", fontFamily: 'Besley' }}>Polishes . Time</p>

            <div className="row ms-lg-4 p-lg-5 ms-md-0 p-md-0 ms-sm-0 p-sm-0">
                {
                    fakedata.slice(0,6).map(v =>

                        <div className="col-lg-4  col-md-12 col-sm-12 rounded" style={{ fontFamily: 'Besley' }}>

                            <div className="m-5" style={{ color: "black" }}>

                                <div className="rounded-3 shadow ">


                                    <div className="p-5">


                                        <img style={{ height: "200px", width: "200px" }} src={v.img} alt="" />
                                        <p>Name : {v.name}</p>
                                        <p style={{ color: "red" }}>Amount : {v.amount}</p>
                                        <p>{v.description}</p>
                                       
                                        <ReactStars {...{
                                            size: 30,
                                            value: v.value,
                                            edit: false
                                        }} />
                                        <button className=" btn btn-danger">Buy Now</button>


                                    </div>

                                    <div>


                                    </div>


                                </div>



                            </div>

                        </div>


                    )
                }
            </div>
        </div>

    );

};


export default Product;