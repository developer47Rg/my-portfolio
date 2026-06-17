import { useState } from "react";
import {useEffect, useRef } from "react";
import "./Navbar.scss";
import { HiOutlineQrcode } from "react-icons/hi";
import { AiFillCaretDown } from "react-icons/ai";
import { RiDownloadCloud2Fill } from "react-icons/ri";


const Navbar = () => {
    const [isActive, setIsActive] = useState(false);
    const navRef    = useRef(null);
    const toggleRef = useRef(null);
 // document click — close when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                navRef.current &&
                !navRef.current.contains(e.target) &&
                toggleRef.current &&
                !toggleRef.current.contains(e.target)
            ) {
                setIsActive(false);  // remove active class
            }
        };

        document.addEventListener("click", handleClickOutside);

        // cleanup when component unmounts
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);
        return (
        <nav className="navbar" ref={navRef}>
            {/* nav container */}
            <div className="container navbar__container">

                {/* nav logo */}
                <a className="navbar__logo" href="/">
                    <span className="navbar__logo-accent">R</span>G
                    <span className="navbar__logo-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M 144 256 L 27.598 256 L 144 139.598 Z M 256 207.5 L 200 256 L 200 56 L 0 56 L 48 0 L 256 0 Z M 0 204.402 L 0 112 L 92.402 112 Z" fill="currentColor"></path></svg>
                    </span>
                </a>

                {/* nav menu */}
                <ul className={`navbar__menu ${isActive ? "navbar__menu--active" : ""}`}>

                    {/* nav menu mobile close icon & logo icon  */}
                    <span className="navbar__mobile--cta">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M 144 256 L 27.598 256 L 144 139.598 Z M 256 207.5 L 200 256 L 200 56 L 0 56 L 48 0 L 256 0 Z M 0 204.402 L 0 112 L 92.402 112 Z" fill="currentColor"></path></svg>
                        <svg className="navbar__close" onClick={() => setIsActive(false)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M4 20h14v2H4a2 2 0 0 1-2-2V6h2v14M20.22 2H7.78C6.8 2 6 2.8 6 3.78v12.44C6 17.2 6.8 18 7.78 18h12.44c.98 0 1.78-.8 1.78-1.78V3.78C22 2.8 21.2 2 20.22 2M19 13.6L17.6 15L14 11.4L10.4 15L9 13.6l3.6-3.6L9 6.4L10.4 5L14 8.6L17.6 5L19 6.4L15.4 10l3.6 3.6Z"/></svg>
                    </span>

                    <li className="navbar__item">
                        <a className="navbar__link" href="#about" data-title="About">
                            <span className="navbar__link-text">About</span>
                            <AiFillCaretDown className="navbar__link-icon" /> 
                        </a>
                    </li>
                    <li className="navbar__item"><a className="navbar__link" href="#skills" data-title="Skills"><span className="navbar__link-text">Skills </span><AiFillCaretDown className="navbar__link-icon" /></a></li>
                    <li className="navbar__item"><a className="navbar__link" href="#projects" data-title="Project"><span className="navbar__link-text">Project </span><AiFillCaretDown className="navbar__link-icon" /></a></li>
                    <li className="navbar__item"><a className="navbar__link" href="#contact" data-title="Contact Me"><span className="navbar__link-text">Contact Me </span><AiFillCaretDown className="navbar__link-icon" /></a></li>
                </ul>

                {/* nav cta button and mobile toggle */}
                <span className="navbar__actions">
                    <a className="navbar__cta btn" href="rahul-gauniyal-resume.pdf" download="Rahul-Resume.pdf">Resume <RiDownloadCloud2Fill /></a>
                    <svg className="navbar__toggle" ref={toggleRef} onClick={() => setIsActive(true)} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 256 256" fill="currentColor"><path d="M 0 226.017 C 17.21 226.545 31 240.661 31 258 L 0 258 Z M 85 226 C 102.673 226 117 240.327 117 258 L 53 258 C 53 240.327 67.327 226 85 226 Z M 171 226 C 188.673 226 203 240.327 203 258 L 139 258 C 139 240.327 153.327 226 171 226 Z M 257 258 L 225 258 C 225 240.327 239.327 226 257 226 Z M 85 140 C 102.673 140 117 154.327 117 172 C 117 189.673 102.673 204 85 204 C 67.327 204 53 189.673 53 172 C 53 154.327 67.327 140 85 140 Z M 171 140 C 188.673 140 203 154.327 203 172 C 203 189.673 188.673 204 171 204 C 153.327 204 139 189.673 139 172 C 139 154.327 153.327 140 171 140 Z M 257 204 C 239.327 204 225 189.673 225 172 C 225 154.327 239.327 140 257 140 Z M 0 140.017 C 17.21 140.545 31 154.661 31 172 C 31 189.339 17.21 203.454 0 203.982 Z M 85 54 C 102.673 54 117 68.327 117 86 C 117 103.673 102.673 118 85 118 C 67.327 118 53 103.673 53 86 C 53 68.327 67.327 54 85 54 Z M 171 54 C 188.673 54 203 68.327 203 86 C 203 103.673 188.673 118 171 118 C 153.327 118 139 103.673 139 86 C 139 68.327 153.327 54 171 54 Z M 257 118 C 239.327 118 225 103.673 225 86 C 225 68.327 239.327 54 257 54 Z M 0 54.017 C 17.21 54.545 31 68.662 31 86 C 31 103.339 17.21 117.454 0 117.982 Z M 117 0 C 117 17.673 102.673 32 85 32 C 67.327 32 53 17.673 53 0 Z M 202.982 0 C 202.454 17.21 188.339 31 171 31 C 153.661 31 139.546 17.21 139.018 0 Z M 257 31 C 239.661 31 225.546 17.21 225.018 0 L 257 0 Z M 30.982 0 C 30.464 16.878 16.878 30.464 0 30.982 L 0 0 Z" fill="currentColor"></path></svg>
                </span>
            </div>
        </nav>
    );
}

export default Navbar;