import projects from "../../data/projects"
import IProject from "../../interfaces/project";
import Project from "./individual-project";

const Projects = () => {

    const mappedProjects = projects.map((project: IProject) =>
        <Project key={project.name} project={project} />
    );

    return (
        <div className="w-full p-2 bg-blue-200">
            <div className="text-lg font-bold">Projects</div>
            <div id="projectsContainer" className="w-full flex flex-col justify-around gap-2 p-2 border-2 border-red-500">
                {mappedProjects}
            </div>
        </div>
    )
}

export default Projects
