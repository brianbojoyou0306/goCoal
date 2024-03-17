import React,{useState} from 'react'

const Expand = ({children,maxChars=90}) => {
    let [expanded, setExpand] = useState(true)
    if (children.length <= maxChars) return <p>{children}</p>
    let text = expanded ? children.substring(0,maxChars):children
  return (
    <div>
          <p className="mod_text">{text}</p>
          <button className="btn__modal"  onClick={()=>setExpand(!expanded)}>{expanded ? "Read more" : "Read less"}</button>
    </div>
  )
}

export default Expand
