import React from 'react'
import IMG1 from '../../src/assets/img1.jpg';
import IMG2 from '../../src/assets/img2.jpg';

import IMG3 from '../../src/assets/img3.jpg';

function FirstPractice(props){
    const imgestyling = {
        height: "150pt",
        weight: "150pt",
        borderRadius: "25px",
    
    }
    return(
        <div>
            <div className = "details">
                <img src={props.imgurl}  style = {imgestyling} alt='test'></img>
               {/* <img src={IMG2}  style = {imgestyling} alt='test'></img> */}

                {/* <img src={IMG3}  style = {imgestyling} alt='test'></img> */}

                <h3>{props.name} </h3>
                <p>Phone: {props.phone}</p>
                <p>Email: {props.email}</p>
            </div>
        </div>
    )
}
export default FirstPractice