import icons from "../../data/icons"

const ProjectTag = ({ element }: any) => {

    const elementIcon = () => {
        if (element in icons) return <img src={icons[element]} key={element} className="w-4" />
        else return <div>{element}</div>
    };

    return (
        <div className="flex border gap-2 rounded-lg p-1 text-xs bg-slate-300">
            {element}
            {elementIcon()}
        </div>
    )
}

export default ProjectTag