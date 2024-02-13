import Avatar from "./solutions/avatar";
import React from 'react';
import { Panel, PanelTitle, PanelContent } from "./components/panel";
import { Project, ProjectAttribute, ProjectAttributeList, ProjectDescription, ProjectTitle } from "./solutions/project";


const App = () =>{
    return (
        <div className="flex justify-center bg-gray-100 px-10">
            <div className="flex flex-col font-mono gap-10 md:w-2/3 min-h-screen  text-gray-800 text-lg"> 
                <div className="flex flex-col items-start justify-center">
                    <div className="flex flex-col text-7xl sm:text-[8vh] sm:leading-[8vh]">
                        <span>Tim</span> 
                        <span>Schraml</span>
                    </div>
                    <div className="text-2xl leading-xl sm:text-[3vh] sm:leading-[3vh]">Fullstack Web Engineer</div>
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
                <Project link={'https://github.com/SchramlTim/taberu'}>
                    <ProjectTitle>Taberu 🍱</ProjectTitle>
                    <ProjectDescription>
                        Taberu is about simplifying food ordering within an organization. 
                    </ProjectDescription>
                    <ProjectAttributeList>
                        <ProjectAttribute>PHP</ProjectAttribute>
                        <ProjectAttribute>REST API</ProjectAttribute>
                        <ProjectAttribute>React</ProjectAttribute>
                        <ProjectAttribute>Tailwind</ProjectAttribute>
                        <ProjectAttribute>Vercel</ProjectAttribute>
                    </ProjectAttributeList>
                </Project> 
                <Project link={'https://github.com/SchramlTim/schramltim.github.io'}>
                    <ProjectTitle>Portfolio website 🎨</ProjectTitle>
                    <ProjectDescription>
                        Just a small portfolio website where I try things out
                    </ProjectDescription>
                    <ProjectAttributeList>
                        <ProjectAttribute>React</ProjectAttribute>
                        <ProjectAttribute>Tailwind</ProjectAttribute>
                        <ProjectAttribute>Three.js</ProjectAttribute>
                    </ProjectAttributeList>
                </Project> 
            </div>
        </div>
    )
}

export default App