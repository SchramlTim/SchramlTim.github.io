import React from "react";
import StackIcon from "tech-stack-icons";

const statusMapping = {
  'interested': {
    count: 1,
    color: 'bg-orange-500'
  },
  'playing around': {
    count: 2,
    color: 'bg-amber-500'
  },
  'already used': {
    count: 3,
    color: 'bg-lime-500'
  },
  'daily use': {
    count: 4,
    color: 'bg-emerald-500'
  }
}

const StatusIcon = (props) => {

  console.log(statusMapping[props.status])

  const coloredSteps = new Array(statusMapping[props.status]?.count || 0).fill(null).map(() => { 
    return <li className={`w-1/6 h-1 rounded ${statusMapping[props.status]?.color}`}></li>
  }) 

  const graySteps = new Array(4 - statusMapping[props.status]?.count || 0).fill(null).map(() => { 
    return <li className={`w-1/6 h-1 rounded bg-gray-500`}></li>
  }) 

    return (
      <i className={`flex flex-col gap-1 w-full items-center text-xs ${props.className || ''}`}>
        <StackIcon name={props.name} className="aspect-square" /> 
        <span>{props.name}</span>
        {props.status &&
          <>
            <ol className="flex flex-row justify-between w-2/3">
              {coloredSteps}
              {graySteps}
            </ol>
            <span className="text-center text-[0.5rem] leading-3">{props.status}</span>
          </>
        }
      </i>
    )
}

export {
  StatusIcon
}
