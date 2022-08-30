const Nav = ({ toggle }: any) => {
    return (
        <div className="fixed w-screen p-3 top-0 left-0 h-screen flex flex-col items-center justify-start text-white bg-slate-500/95">
            <div className="w-full flex items-center justify-end">
                <button onClick={toggle}>X</button>
            </div>
            <div className="w-full h-full flex flex-col items-center gap-3 justify-center">
                <a className="text-4xl hover:underline cursor-pointer" href="https://github.com/jmv1006" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a className="text-4xl hover:underline cursor-pointer" href="https://www.dropbox.com/s/l8pkije8qat0zze/jonathan-andrade-valenzuela.pdf?dl=0" target="_blank" rel="noopener noreferrer">Resume</a>
            </div>
        </div>
    )
}

export default Nav