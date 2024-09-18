import { useState } from "react";
import "./Modal.css";
import { RxCross1 } from "react-icons/rx";







const Modal=({handleCrose, handleMessage})=>{
    return (
        <>
        <div className="modal-2"></div>
        <div className="modal-1">
        <span style={{cursor:"pointer",marginTop:"2px"}} onClick={handleCrose}><RxCross1/></span>
        <div className="modal-img">
            <img className="modal-img2" src="https://media.licdn.com/dms/image/v2/D5603AQELQOg-2wKgig/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1718210354331?e=1732147200&v=beta&t=y9xd47f3Ix99qbHspAQG3PyRb4Hp6JiR90xWzYTlySM"></img>
        <h5 style={{fontSize:"28px", fontWeight:"700", marginLeft:"15px"}}>Abcd Singh<p style={{fontSize:"16px", fontWeight:"400"}}>Post to anyone</p></h5>
        </div>
        <div className="modal-inp">
        <input type="text" placeholder="What you want to talk about"></input>
        </div>
        <div className="modal-line"></div>
        <div><button onClick={handleMessage} className="modal-btn">Post</button></div>
        </div>
        </>
    )
}
export default Modal;