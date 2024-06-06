import React from "react";

const Panel = (props) =>{
    return (
      <div className={props.className || ''}>
        {props.children}
      </div>
    )
}
const PanelTitle = (props) =>{
    return (
      <h2 className={`text-3xl font-bold mb-3 truncate ${props.className || ''}`}>{props.children}</h2>
    )
}
const PanelContent = (props) =>{
    return (
      <div className={props.className || ''}>
          {props.children}
      </div> 
    )
}

export {
  Panel,
  PanelTitle,
  PanelContent
}
