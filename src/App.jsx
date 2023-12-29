import Avatar from "./solutions/avatar";
import React from 'react';
import { Panel, PanelTitle, PanelContent } from "./components/panel";


const App = () =>{
    return (
        <div className="flex flex-col font-mono gap-10 min-h-screen bg-gray-100 text-gray-800 px-5 text-xl"> 
            <div className="flex flex-col items-start justify-center">
                <div className="flex flex-col text-[10vh] leading-[10vh]">
                    <span>Tim</span>
                    <span>Schraml</span>
                </div>
                <div className="text-[5vh] leading-[5vh]">Fullstack Web Engineer</div>
            </div>

            <Panel>
                <PanelTitle>About me</PanelTitle>
                <PanelContent>
                    <div className="flex flex-col sm:flex-row">
                        <div className="flex flex-col gap-3 sm:w-1/2">
                            <p>Passionate full-stack developer committed to mission-driven work, with a focus on thoughtful UI design, collaboration, and a dedication to teaching.</p>
                            <p>I was already fascinated by computers as a child, loved puzzles and logical games, so I made these things my profession</p>
                            <p>I am blessed with a wife and a daughter, love to tinker with my own projects in my spare time and try out new tech trends or just throw myself into a game with friends</p>
                        </div>
                        <div className="flex justify-center sm:w-1/2">
                            <Avatar />
                        </div>
                    </div>
                </PanelContent>
            </Panel> 
        </div>
    )
}

export default App