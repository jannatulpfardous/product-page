import React from 'react';
import './Review.css';


import ReactStars from "react-rating-stars-component";

const firstExample = {
    size: 30,
    value: 3.0,
    edit: false
};


const Review = () => {



    return (


        <div className="text-center mt-4">



            <div >

                <h2 >this is review page</h2>

                <table class="review-name">
                    <tr>
                        <td>Features</td>
                        <td><ReactStars {...firstExample} /></td>
                    </tr>
                    <tr>
                        <td>Customer Services</td>
                        <td><ReactStars {...firstExample} /></td>
                    </tr>


                </table>
            </div>






            <div>
                <form action="">


                    <label for="name">Your Name (Optional) : </label> <br />
                    <input type="text" id="name" name="name" /> <br />

                    <label for="email">Email Address (Optional) : </label> <br />
                    <input type="text" id="email" name="email" /> <br />

                    <label for="description">Description: </label> <br />
                    <input type="text" id="description" name="description" /> <br />

                   <button className="btn btn-dark mt-3">Submit</button>

                </form>
            </div>


        </div>


    );


};

export default Review;