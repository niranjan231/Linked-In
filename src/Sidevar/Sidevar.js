import { FaMessage } from "react-icons/fa6";
import { FaSave } from "react-icons/fa";
import "./Sidevar.css";
import { MdGroup } from "react-icons/md";
import { MdEmojiEvents } from "react-icons/md";







const Sidevar=()=>{
    return (
        <>
        <div className="sidevar-1">
            <div className="side-img">
                <img className="side-img-1" src="https://media.licdn.com/dms/image/v2/D4D16AQGRMPaWW9N8AA/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1674849632924?e=1730937600&v=beta&t=zllPk9EbBJyR5wQwD6IQBJYFySuvebe1y7BJ5LFmGko"></img>
                <img className="side-img-2" src="https://vectorified.com/images/avatar-icon-png-24.png"></img>
            </div>
            <div>
                <h3>Sumit Sharma</h3>
            </div>
            <h5>Full Stack Developer</h5>
            <p>Delhi Indhira Vihar 63278</p>
        </div>

        <div className="sidevar-2">
<p>Accelerate your career with</p>
<p>Premioum</p>
<h4><FaMessage /> Try For Rs.0</h4>
        </div>

        <div className="sidevar-3">
            <span> <FaSave />Save Item</span>
            <span><MdGroup /> Groups</span>
            <span><MdEmojiEvents /> Event</span>
        </div>
        </>
    )
}
export default Sidevar;