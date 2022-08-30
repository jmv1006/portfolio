import IProject from "../../interfaces/project"
import ProjectTag from './project-tag';

type ProjectProps = {
    project: IProject
}
const Project = ({ project }: ProjectProps) => {

    const mappedTech = project.tech.map((tech: string) =>
        <ProjectTag key={tech} element={tech} />
    );

    return (
        <div className="w-full p-2 flex flex-col items-start justify-around bg-slate-100">
            <div className="font-circular text-lg">{project.name}</div>
            <div className="w-full flex flex-wrap items-center justify-start gap-3">
                {mappedTech}
            </div>
            <div className="w-full p-1 text-base">
                {project.description}
            </div>
            <div className="w-full flex items-center justify-around">
                {project.siteLink && <a href={project.siteLink} target="_blank" rel="noopener noreferrer" className="font-bold hover:underline">Live Site</a>}
                <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="font-bold hover:underline">Code</a>
            </div>
        </div>
    )
}

export default Project