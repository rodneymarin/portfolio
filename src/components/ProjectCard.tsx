import { ProjectData } from "../hooks/useProjects";

interface ProjectCardProps {
  data: ProjectData;
}

export default function ProjectCard(props: ProjectCardProps) {
  return (
    <a className="p-4 border rounded-2xl grid grid-rows-2 md:grid-cols-2 md:grid-rows-1 gap-4 leading-tight button" href={props.data.url} target="_blank">
      <div className="text-left order-2 md:order-none">
        <h4 className="text-2xl text-accent-light font-semibold mb-2">{props.data.title}</h4>
        <p>{props.data.desc}</p>
        <div className="flex gap-2 mt-2 flex-wrap">
          {
            props.data.stack.map(stack => {
              return (<div key={stack} className="capsule border-faded-text border-dashed">{stack}</div>)
            })
          }
        </div>
      </div>
      <div className="rounded-lg h-52 overflow-hidden">
        <img src={props.data.file} className="w-full h-auto"></img>
      </div>
    </a>
  )
}
