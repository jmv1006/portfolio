import icons from "../data/icons";

const Skills = () => {
    const languages = ['JavaScript', 'TypeScript', 'Python', 'HTML', 'Java']
    const technologies = ['React', 'Express', 'Git', 'MySQL', 'MongoDB', 'Redis', 'Tailwind CSS']

    const mappedLanguages = languages.map((language: string) => {
        if (language in icons) return <img className="w-12" src={icons[language]} alt={language} />
        else return <div key={language}>{language}</div>
    });

    const mappedTechnologies2 = technologies.map((technology: string) => {
        if (technology in icons) return <img className="w-12" src={icons[technology]} alt={technology} />
        else return <div key={technology}>{technology}</div>
    });

    const mappedTechnologies = technologies.map((technology: string) =>
        <div key={technology}>{technology}</div>
    );

    return (
        <div className="w-full p-2 flex flex-col items-start bg-white">
            <div className="text-xl font-bold">Skills</div>
            <div className="w-full flex flex-col gap-2 p-3 items-center justify-around">
                <div className="w-full p-2 gap-2 flex flex-col justify-start items-center border">
                    <div className="font-circular text-lg font-extrabold">Languages</div>
                    <div className="w-full flex justify-around items-center">
                        {mappedLanguages}
                    </div>
                </div>
                <div className="w-full p-2 gap-2 flex flex-col justify-start items-center border">
                    <div className="font-circular text-lg font-extrabold">Technologies and Utilities</div>
                    <div className="w-full flex justify-around items-center">
                        {mappedTechnologies2}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills