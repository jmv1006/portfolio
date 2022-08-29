import { useState, useEffect } from "react";
import Nav from "./nav";

const Header = () => {
    const [navToggled, setNavToggled] = useState(false);
    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 550px)").matches
    )

    useEffect(() => {
        window
            .matchMedia("(min-width: 550px)")
            .addEventListener('change', e => setMatches(e.matches));
    }, []);

    const toggleNav = () => {
        if (navToggled) return setNavToggled(navToggled => false)
        setNavToggled(navToggled => true)
    };

    return (
        <div className="w-full h-14 p-2 flex items-center justify-between bg-slate-300">
            Jonathan Andrade Valenzuela
            {matches &&
                <div className="flex gap-4">
                    <div className="hover:underline cursor-pointer">Resume</div>
                    <div className="hover:underline cursor-pointer">GitHub</div>
                </div>
            }
            {!matches && <button onClick={toggleNav}>TTT</button>}
            {navToggled && <Nav toggle={toggleNav} />}
        </div>
    )
};

export default Header;