import Header from "../components/header"
import Introduction from "../components/introduction"
import Skills from "../components/skills"
import Projects from "../components/projects"

function App() {

  return (
    <div className="w-screen h-screen m-0 flex flex-col items-center justify-start">
      <Header />
      <div className="w-screen h-full bg-slate-400 overflow-auto">
        <Introduction />
        <Skills />
        <Projects />
      </div>
    </div>
  )
}

export default App
