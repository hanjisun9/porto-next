import { BiLogoHtml5, BiLogoCss3, BiLogoReact, BiLogoJavascript, BiLogoPython, BiLogoJava, BiLogoNodejs, BiLogoGit, BiLogoGithub } from "react-icons/bi";
import { DiDart } from "react-icons/di";
import { FaFlutter } from "react-icons/fa6";
import { SiVite } from "react-icons/si";
import Button from "@/components/button";

export default function SkillsPage() {
    return (
        <div className="skill-page">
            <h1 className="title">My Skills</h1>

            <div className="skills-box">
                <div className="skills-content">
                    <h3>Front-End</h3>
                    <div className="content">
                        <span><BiLogoHtml5 className="icon"/>
                        <p>HTML</p>
                        </span>
                        <span><BiLogoCss3 className="icon"/>
                        <p>CSS</p>
                        </span>
                        <span><BiLogoJavascript className="icon"/>
                        <p>JS</p>
                        </span>
                        <span><BiLogoReact className="icon"/>
                        <p>React</p></span>
                    </div>
                </div>

                <div className="skills-content">
                    <h3>Back-End</h3>
                    <div className="content">
                        <span><BiLogoNodejs className="icon"/>
                        <p>Node.js</p>
                        </span>
                        <span><BiLogoPython className="icon"/>
                        <p>Python</p></span>
                        <span><BiLogoJava className="icon"/>
                        <p>JAVA</p></span>
                    </div>
                </div>

                <div className="skills-content">
                    <h3>Mobile</h3>
                    <div className="content">
                        <span><DiDart className="icon"/>
                        <p>Dart</p>
                        </span>
                        <span><FaFlutter className="icon"/>
                        <p>Flutter</p>
                        </span>
                    </div>
                </div>

                <div className="skills-content">
                    <h3>Tools</h3>
                    <div className="content">
                        <span><BiLogoGit className="icon"/>
                        <p>Git</p>
                        </span>
                        <span><BiLogoGithub className="icon"/>
                        <p>Github</p>
                        </span>
                        <span><SiVite className="icon"/>
                        <p>Vite.js</p>
                        </span>
                    </div>
                </div>
            </div>
            <span className="number-page">6</span>
            <Button page="turn-3" direction="back" />
        </div>
    )
}