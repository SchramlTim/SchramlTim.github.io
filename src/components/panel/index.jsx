import React from "react";

const Panel = (props) =>{
    return (
      <div className={''}>
        {props.children}
      </div>
    )
}
const PanelTitle = (props) =>{
    return (
      <h2 className="text-4xl font-bold uppercase">{props.children}</h2>
    )
}
const PanelContent = (props) =>{
    return (
      <div className={'text-gray-500'}>
          {props.children}
      </div> 
    )
}

export {
  Panel,
  PanelTitle,
  PanelContent
}