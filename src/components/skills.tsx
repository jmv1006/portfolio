const Skills = () => {
    const languages = ['JavaScript', 'TypeScript', 'Python', 'HTML', 'CSS']
    const technologies = ['React', 'Express', 'Git', 'MySQL', 'MongoDB', "AWS: RDS, S3", "Styled Components"]

    const mappedLanguages = languages.map((language: string) =>
        <li key={language}>{language}</li>
    );

    const mappedTechnologies = technologies.map((technology: string) =>
        <li key={technology}>{technology}</li>
    );

    return (
        <div className="w-full p-2 flex flex-col items-start bg-slate-500">
            <div className="text-lg font-bold text-white">Skills</div>
            <div className="w-full flex flex-col gap-2 p-3 items-center justify-around">
                <div className="w-full p-2 flex flex-col justify-start items-center bg-slate-200">
                    <div className="text-lg font-extrabold">Languages</div>
                    <div className="w-full flex items-start justify-center">
                        <ul className="flex flex-col items-center">
                            {mappedLanguages}
                        </ul>
                    </div>
                </div>
                <div className="w-full p-2 flex flex-col justify-start items-center bg-slate-200">
                    <div className="text-lg font-extrabold">Technologies and Utilities</div>
                    <div className="w-full flex items-start justify-center">
                        <ul className="flex flex-col items-center">
                            {mappedTechnologies}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills