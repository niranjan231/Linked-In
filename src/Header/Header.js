import { CiSearch } from "react-icons/ci";
import "./Header.css";
import { IoMdHome } from "react-icons/io";
import { FaUserFriends } from "react-icons/fa";
import { BsFillBagFill } from "react-icons/bs";
import { AiOutlineMessage } from "react-icons/ai";
import { IoNotifications } from "react-icons/io5";
import { MdAddAPhoto } from "react-icons/md";





const Header=()=>{
    return(
       <div className="header">
        <div className="header-left">
            <div className="header-logo">
                <img src="https://pngimg.com/uploads/linkedIn/linkedIn_PNG8.png"></img>
            </div>
            <div className="header-serch">
            <CiSearch />
            <input type="text" placeholder="search"></input>
            </div>
        </div>

        <div className="header-right">
<div className="headers-logo">
<IoMdHome /><span>Home</span>
</div>
<div className="headers-logo">
<FaUserFriends /><span>MyNatwork</span>
</div>
<div className="headers-logo">
<BsFillBagFill /><span>Jobs</span>
</div>
<div className="headers-logo">
<AiOutlineMessage /><span>Message</span>
</div>
<div className="headers-logo">
<IoNotifications /><span>Notifaction</span>
</div>
<div className="headers-logo">
<MdAddAPhoto /><span>Notifaction</span>
</div>
        </div>
       </div>
    )
}
export default Header;
