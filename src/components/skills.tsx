const Skills = () => {
    return (
        <div className="w-full p-3 flex flex-col gap-3 bg-green-300">
            <strong>Skills</strong>
            <div className="w-full flex items-start justify-around">
                <div className="w-2/5 p-2 flex flex-col justify-start items-center bg-slate-200">
                    <strong>Languages</strong>
                    <div className="w-full flex items-start justify-center">
                        <ul className="flex flex-col items-center">
                            <li>JavaScript</li>
                            <li>TypeScript</li>
                            <li>Python</li>
                            <li>HTML</li>
                            <li>CSS</li>
                        </ul>
                    </div>
                </div>
                <div className="w-2/5 p-2 flex flex-col justify-start items-center bg-slate-200">
                    <strong>Technologies/Utilities</strong>
                    <div className="w-full flex items-start justify-center">
                        <ul className="flex flex-col items-center">
                            <li>Git</li>
                            <li>MySQL</li>
                            <li>MongoDB</li>
                            <li>React</li>
                            <li>Express</li>
                            <li>AWS: RDS, S3</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills