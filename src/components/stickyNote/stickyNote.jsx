import React from "react"
import {Link} from "react-router-dom"
import "./stickyNote.css"

const StickyNote = (props) => {
    const {title,content,date} = props
    const maxContentLength=80;
    
    return (
        <Link to="/home/note" style={{width:"100%"}} className="noLinkStyle" >
            <div className="stickyNote-general-div">
                <h1 className="stickyNote-title">{title}</h1>
                <h1 className="stickyNote-text" style={{marginLeft:"15px"}}>{content.length>maxContentLength ? content.substring(0,maxContentLength)+"..." : content}</h1>
                <h1 className="stickyNote-text">{date}</h1>
            </div>    
        </Link>
                
    )
}

export default StickyNote