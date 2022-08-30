import IProject from "../../interfaces/project"
import Icons from '../../data/icons';

type ProjectProps = {
    project: IProject
}
const Project = ({ project }: ProjectProps) => {

    const mappedTech = project.tech.map((tech: string) => {
        if (tech in Icons) return <img className="w-10" src={Icons[tech]} alt={tech} />
        else return <div key={tech}>{tech}</div>
    });

    return (
        <div className="w-full p-2 flex flex-col items-start justify-around gap-3 border border-gray-200">
            <div className="font-circular text-lg">{project.name}</div>
            <div className="w-full flex gap-7">
                {mappedTech}
            </div>
            <div className="w-full flex items-center justify-around">
                {project.siteLink && <a href={project.siteLink} target="_blank" rel="noopener noreferrer" className="font-bold hover:underline">Live Site</a>}
                <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="font-bold hover:underline">Code</a>
            </div>
        </div>
    )
}

export default Project