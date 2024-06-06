import React from "react";

const Panel = (props) =>{
    return (
      <section className={props.className || undefined}>
        {props.children}
      </section>
    )
}
const PanelTitle = (props) =>{
    return (
      <h2 className={`text-3xl font-bold mb-3 truncate ${props.className || ''}`}>{props.children}</h2>
    )
}
const PanelContent = (props) =>{
    return (
      <p className={props.className || undefined}>
          {props.children}
      </p> 
    )
}

export {
  Panel,
  PanelTitle,
  PanelContent
}
