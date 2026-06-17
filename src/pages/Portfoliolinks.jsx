import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import "./Portfoliolinks.scss"


function Portfoliolinks() {
  const projects = [
    "https://www.marleyfans.in/",
    "https://gayatritechnologies.com/",
    "https://mbbswala.in/",
    "https://www.handmadeinbritain.co.uk/",
    "https://www.medicalgasinstallers.com/",
    "https://www.whclab.com/",
    "https://dconstruxtion.com/",
    "https://www.myirsteam.com/",
    "https://www.pontikaaerotech.com/",
    "https://redwingsolutions.in/",
    "https://www.lnctguru.org/",
    "https://skytechacademy.com/",
    "https://www.xtb.com/int",
    "https://emfluxmotors.com/",
    "https://i2services.in/",
    "https://www.belief.co.in/",
    "https://www.banodoctor.com/",
    "https://www.uniagents.com/",
    "https://chatenyamittal.com/",
    "https://rpa.synapseindia.com/",
    "https://goriderz.in/",
    "https://style-hell-ecom.vercel.app/",
    "https://nexa-chain-ai-lemon.vercel.app/",
    "https://www.bionova.co.in/",
    "https://www.smartchainstudios.in/",
    "https://smartblockchain.com/en",
    "https://www.brownwood.co.in/",
    "https://rangeenmakaan.com/",
    "https://lightomated.com/",
    "https://vallect.com/"
  ];

  return (
    <>
      <Navbar />

      <section className="portfoliolinks top--space">
        <div className="container portfoliolinks__container">
          <h1 className="portfoliolinks__title">
            Portfolio Projects
          </h1>

          <ul className="portfoliolinks__list">
            {projects.map((project) => (
              <li
                key={project}
                className="portfoliolinks__item"
              >
                <a
                  className="portfoliolinks__link"
                  href={project}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Contact />
    </>
  );
}

export default Portfoliolinks;