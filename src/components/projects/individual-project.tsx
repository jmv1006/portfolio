import IProject from "../../interfaces/project"

type ProjectProps = {
    project: IProject
}
const Project = ({ project }: ProjectProps) => {
    return (
        <div className="w-full h-56 p-2 bg-white">
            {project.name}
            <div>{project.description}</div>
        </div>
    )
}

export default Project