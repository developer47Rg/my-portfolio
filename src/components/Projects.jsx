import { Link } from "react-router-dom";
import "./Projects.scss"
import { RiDownloadCloud2Fill } from "react-icons/ri";

function Projects(){
    return(
        <section id="projects" className="projects top--space">
            <div className="container projects__container">
                <h2 className="projects__title">My Projects</h2>
                <ul className="projects__list">
                    <li><a href="https://rangeenmakaan.com/" target="_blank" rel="noopener noreferrer">
                        <span className="link__text">View project</span>
                        <img src="./images/project-1.webp" alt=""></img>
                    </a></li>
                    <li><a href="https://www.xtb.com/int" target="_blank" rel="noopener noreferrer">
                    <span className="link__text">View project</span>
                        <img src="./images/project-8.webp" alt=""></img>
                    </a></li>
                    <li><a href="https://emfluxmotors.com/" target="_blank" rel="noopener noreferrer">
                    <span className="link__text">View project</span>
                        <img src="./images/project-9.webp" alt=""></img>
                    </a></li>
                    <li><a href="https://goriderz.in/" target="_blank" rel="noopener noreferrer">
                    <span className="link__text">View project</span>
                        <img src="./images/project-10.webp" alt=""></img>
                    </a></li>
                    <li><a href="https://www.bionova.co.in/" target="_blank" rel="noopener noreferrer">
                     <span className="link__text">View project</span>
                        <img src="./images/project-4.webp" alt=""></img>
                    </a></li>
                    <li><a href="https://dconstruxtion.com/" target="_blank" rel="noopener noreferrer">
                    <span className="link__text">View project</span>
                        <img src="./images/project-7.webp" alt=""></img>
                    </a></li>
                </ul>
                <span className="projects__cta "><Link className="btn" to="/portfoliolinks">View All <RiDownloadCloud2Fill /></Link></span>
            </div>
        </section>
    )
}

export default Projects;