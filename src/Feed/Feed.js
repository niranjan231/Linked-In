import "./Feed.css";
import { MdOutlinePermMedia } from "react-icons/md";
import { MdEmojiEvents } from "react-icons/md";
import { FaBuildingCircleArrowRight } from "react-icons/fa6";
import Modal from "../Modal";
import { useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { MdOutlineReportOff } from "react-icons/md";
import { CiShare2 } from "react-icons/ci";








const Feed=()=>{
    const [seen , setSeen] = useState(false);
    const [Message2 , setMessage2] = useState("typing....");
    const handleMessage=(e)=>{
        setMessage2(e.target.value);
    }
    const handleSeen=()=>{
        setSeen(true);
    }
    const handleCrose=()=>{
        setSeen(false)
    }
    return(
        <>
        < div className="feed-1">
      <div className="feed-3">
<div>
    <img className="feed-img" src="https://media.licdn.com/dms/image/v2/D5603AQELQOg-2wKgig/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1718210354331?e=1732147200&v=beta&t=y9xd47f3Ix99qbHspAQG3PyRb4Hp6JiR90xWzYTlySM"></img>
</div>
<form>
    <input onClick={handleSeen} type="text" placeholder="Start a Post try wright AI"></input>
    {/* <input className="feed-btn" type="submit"/> */}
</form>
</div>
<div className="feed-2">
    <span><MdOutlinePermMedia/>Media</span>
    <span><MdEmojiEvents/>Event</span>
    <span><FaBuildingCircleArrowRight/>Wright artical</span>
</div>
{seen && <Modal handleMessage={handleMessage} handleCrose={handleCrose}/>}
 </div>
 <div className="feed-click2">
    <div className="click2-div">
        <img className="click2-img" src="https://media.licdn.com/dms/image/v2/D5603AQELQOg-2wKgig/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1718210354331?e=1732147200&v=beta&t=y9xd47f3Ix99qbHspAQG3PyRb4Hp6JiR90xWzYTlySM"></img>
        <h3>Abcd Singh</h3>
    </div>
    <h4>{Message2}</h4>
    <div className="click2-font">
        <span><AiOutlineLike /><p>Like</p></span>
        <span><FaRegComment /><p>Comment</p></span>
        <span><MdOutlineReportOff /><p>Report</p></span>
        <span><CiShare2 /><p>Share</p></span>
    </div>
 </div>
 </>
    )
}
export default Feed