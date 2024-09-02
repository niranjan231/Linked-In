import "./Feed.css";
import { MdOutlinePermMedia } from "react-icons/md";
import { MdEmojiEvents } from "react-icons/md";
import { FaBuildingCircleArrowRight } from "react-icons/fa6";






const Feed=()=>{
    return(
        < div className="feed-1">
      <div className="feed-3">
<div>
    <img className="feed-img" src="https://vectorified.com/images/avatar-icon-png-24.png"></img>
</div>
<form>
    <input type="text" placeholder="Start a Post"></input>
    {/* <input className="feed-btn" type="submit"/> */}
</form>
</div>
<div className="feed-2">
    <span><MdOutlinePermMedia/>Media</span>
    <span><MdEmojiEvents/>Event</span>
    <span><FaBuildingCircleArrowRight/>Wright artical</span>


</div>
 </div>
    )
}
export default Feed;