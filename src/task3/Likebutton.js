import React,{useState} from "react";

function LikeButton(){
    const [likes,setLikes] = useState(0);
    const handleLike = () =>{
        setLikes(likes + 1);
    };
    return (
        <div>
            <button onClick={handleLike}>
            👍 Like {likes > 0 ? `(${likes})` : ""}
            </button>
        </div>
    );
    
}
export default LikeButton;