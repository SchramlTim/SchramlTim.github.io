import React from 'react';

const Project = (props) => {
    return (
      <a href={props.link} className={'flex flex-col gap-2 border-solid border-2 border-gray-300 rounded-lg py-2 px-4'}>
        {props.children}
      </a>
    )
}

const ProjectTitle = (props) =>{
    return (
      <h2 className="text-xl font-bold lowercase">{props.children}</h2>
    )
}

const ProjectDescription = (props) =>{
    return (
      <div className={'text-lg text-gray-500'}>
          {props.children}
      </div> 
    )
}

const ProjectAttribute = (props) =>{
    return (
      <div className={'text-sm font-bold lowercase px-2 py-1 rounded-lg bg-gray-400'}>
          {props.children}
      </div> 
    )
}

const ProjectAttributeList = (props) =>{
    return (
      <div className={'flex flex-row flex-wrap w-full gap-3'}>
          {props.children}
      </div> 
    )
}

export {
    Project,
    ProjectTitle,
    ProjectDescription,
    ProjectAttributeList,
    ProjectAttribute
}
