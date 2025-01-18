import { BiLogoTypescript } from "react-icons/bi";
import { FaCss3Alt, FaHtml5, FaLinkedin, FaReact, FaSquareGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { RiJavascriptFill } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";
import { useProjects } from "./hooks/useProjects";
import ProjectCard from "./components/ProjectCard";

interface StackItem {
  name: string,
  icon: JSX.Element
}

function App() {
  const [projects] = useProjects();
  const myStack: StackItem[] = [
    { name: "React.JS", icon: <FaReact /> },
    { name: "Next.JS", icon: <FaReact /> },
    { name: "Typescript", icon: <BiLogoTypescript /> },
    { name: "Javascript", icon: <RiJavascriptFill /> },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
  ];

  return (
    <>
      <section className="mt-4">
        <div className="flex flex-col items-center">
          <figure>
            <div className="aspect-square size-24 rounded-full bg-accent-light overflow-hidden flex justify-center pt-1">
              <img src="/profile-rodney.png" className="w-auto h-full"></img>
            </div>
          </figure>
          <h2 className="text-md">Hi, my name is Rodney</h2>
          <h1 className="text-5xl font-semibold text-accent-light">
            Frontend Developer
          </h1>
          <h5 className="text-[0.6rem] leading-[0.8rem] text-accent-light text-opacity-50">From Maracaibo, Venezuela</h5>
          <h3 className="text-md">Focused in building Web interfaces in React.JS</h3>
          <div className="flex gap-4 mt-4">
            <a className="capsule button" href="https://www.linkedin.com/in/rodneymarin/" target="_blank"><FaLinkedin />Linkedin</a>
            <a className="capsule button" href="https://www.github.com/rodneymarin/" target="_blank"><FaSquareGithub />GitHub</a>
            <a className="capsule button" href="mailto:rodney.marin@gmail.com" target="_blank"><MdEmail />Email</a>
          </div>
        </div>
      </section>
      <section>
        <h4 className="section-title">Projects</h4>
        <div className="flex flex-col gap-4 w-full">
          {
            projects?.map(proj => {
              return (<ProjectCard data={proj} />)
            })
          }
        </div>
      </section>
      <section>
        <h4 className="section-title">My Stack</h4>
        <div className="flex gap-3 justify-center flex-wrap">
          {
            myStack.map(stack => {
              return (<div key={stack.name} className="capsule border-faded-text border-dashed">{stack.icon}{stack.name}</div>)
            })
          }
        </div>
      </section>
      <footer className="text-xs text-accent-light">
        &copy;2050 Rodney Marin
      </footer>
    </>
  )
}

export default App
