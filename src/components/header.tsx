import { useState, useEffect } from "react";
import Nav from "./nav";
import { default as logo } from '../assets/navlines.svg';

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
        <div className="w-full h-14 p-2 sticky top-0 flex items-center justify-between border-b border-black text-lg bg-white">
            jonathan andrade valenzuela
            {matches &&
                <div className="flex gap-4">
                    <a className="hover:underline cursor-pointer" href="https://www.dropbox.com/s/l8pkije8qat0zze/jonathan-andrade-valenzuela.pdf?dl=0" target="_blank" rel="noopener noreferrer">resume</a>
                    <a className="hover:underline cursor-pointer" href="https://github.com/jmv1006" target="_blank" rel="noopener noreferrer">github</a>
                </div>
            }
            {!matches && <img onClick={toggleNav} src={logo} className="w-5 hover:cursor-pointer" />}
            {navToggled && <Nav toggle={toggleNav} />}
        </div>
    )
};

export default Header;